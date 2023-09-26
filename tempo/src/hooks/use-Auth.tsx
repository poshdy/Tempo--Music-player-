import { Session } from "@supabase/supabase-js";
import React, { useEffect, useContext, createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "./use-SupaBase";

type USER = {
  id: string;
  avatar_url: string | undefined;
  email: string | null;
  user_name: string | null;
};

interface ContextI {
  user: USER | null;

  signOut: () => Promise<void>;
  SignUpWithMagiclink: (email: string) => Promise<string | null>;
  signInWithGoogle: () => Promise<void>;
}
const Context = createContext<ContextI>({
  user: null,
  signOut: async () => {},
  SignUpWithMagiclink: async (email: string) => null,
  signInWithGoogle: async () => {},
});


export default function SupabaseAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const Supabase = useSupabase();
  const [data, setData] = useState<any>();
  const [session, setSession] = useState<Session>();
  
  useEffect(() => {
    const getSession = async () => {
      const { data } = await Supabase.auth.getSession();
      setSession(data?.session);
      setData(data?.session?.user)
    };

  }, []);



  const getUser = async () => {
    const { data: user, error } = await Supabase.from("users")
      .select("*")
      .eq("id", session?.user?.id)
      .single();

    if (!user?.avatar_url) {
      getUserImg();
    }

    if (error) {
      return null;
    } else {
      return user;
    }
  };

  const getUserImg = async () => {
    const { error } = await Supabase.from("users")
      .update({
        avatar_url: session?.user?.user_metadata?.avatar_url,
      })
      .eq("id", data?.user?.id);
  };

  const {
    data: user,
  } = useQuery({
    queryKey: ["user-session", session?.user?.id],
    queryFn: getUser,
    enabled: !!session?.user.id,
  });

 

  const SignUpWithMagiclink = async (email: string) => {
    const { error } = await Supabase.auth.signInWithOtp({ email });
    if (error) {
      return error.message;
    }
    return null;
  };

  const signInWithGoogle = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const signOut = async () => {
    await Supabase.auth.signOut();
    navigate("/");
  };

  useEffect(()=>{
    const {
      data: { subscription },
    } = Supabase.auth.onAuthStateChange((_event, Session) => {
     setSession(Session)
    });

    return () => {
      subscription.unsubscribe();
    };
  },[session?.access_token,Supabase])

  const value = {
    user,
    SignUpWithMagiclink,
    signOut,
    signInWithGoogle,
  };
  return (
    <Context.Provider value={value}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useAuth = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuth must be used inside SupabaseAuthProvider");
  } else {
    return context;
  }
};
