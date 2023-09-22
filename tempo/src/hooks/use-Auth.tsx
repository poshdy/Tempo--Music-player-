import { Session } from "@supabase/supabase-js";

import React, { useEffect, useContext, createContext, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "./use-SupaBase";

type USER = {
  id: string;
  avatar_url: string | null;
  email: string | null;
  user_name: string | null;
};

interface ContextI {
  user: USER | null;
  isLoading: boolean;
  error: any;
  SignUp: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  SignUpWithMagiclink: (email: string) => Promise<string | null>;
  signInWithGoogle: () => Promise<void>;
}
const Context = createContext<ContextI>({
  user: null,
  error: null,
  isLoading: true,
  signOut: async () => {},
  SignUp: async (email: string, password: string) => null,
  SignUpWithMagiclink: async (email: string) => null,
  signInWithGoogle: async () => {},
});

export default function SupabaseAuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  const navigate = useNavigate();
  const Supabase = useSupabase();

  const getUser = async () => {
    const { data: user, error } = await Supabase.from("users")
      .select("*")
      .eq("id", session?.user.id)
      .single();

    if (error) {
      return null;
    } else {
      return user;
    }
  };

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user-session"],
    queryFn: getUser,
    enabled: !!session?.user.id,
  });

  const SignUp = async (email: string, password: string) => {
    const { error } = await Supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      return error.message;
    }

    return null;
  };

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
  useEffect(() => {
    const {
      data: { subscription },
    } = Supabase.auth.onAuthStateChange((event, Session) => {
      if (Session?.access_token !== session?.access_token) {
        navigate(0);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, Supabase, session?.access_token]);

  const value = {
    user,
    error,
    SignUp,
    SignUpWithMagiclink,
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
