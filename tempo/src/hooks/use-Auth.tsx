import { AuthResponse, Session } from "@supabase/supabase-js";

import React, { useEffect, useContext, createContext} from "react";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "./use-SupaBase";

type USER = {
  id: string;
  avatar_url: string | null;
  email: string | null;
  userName: string | null;
};

interface ContextI {
  user: USER | null;
  isLoading: boolean;
  error: any;
  SignUp: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  SignInWithEmail: (email: string, password: string) => Promise<string | null>;
  signInWithGoogle: () => Promise<void>;
}
const Context = createContext<ContextI>({
  user: null,
  error: null,
  isLoading: true,
  signOut: async () => {},
  SignUp: async (email: string, password: string) => null,
  SignInWithEmail: async (email: string, password: string) => null,
  signInWithGoogle: async () => {},
});

export default function SupabaseAuthProvider({
  children,
  session
}: {
  children: React.ReactNode;
  session:Session | null
}) {


  const supabase = useSupabase();
  const navigate = useNavigate();


  const getUser = async () => {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", session?.user?.id)
      .single();
    if (error) {
      return null;
    } else {
      return user;
    }
  };

const {data:user , isLoading , error} = useQuery({
  queryKey:['user-session'],
  queryFn:getUser,
})

  const SignUp = async (
    email: string,
    password: string
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      return error.message;
    }

    return null;
  };

  const SignInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return error.message;
    }

    return null;
  };
 

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, Session) => {
      if (Session?.access_token !== session?.access_token) {
        navigate(0);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, supabase, session?.access_token]);




// useEffect(()=>{
// const {data} = supabase.auth.onAuthStateChange(async(event)=>{

// })
// },[])

  const value = {
    user,
    error,
    SignUp,
    SignInWithEmail,
    signOut,
    isLoading,
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
