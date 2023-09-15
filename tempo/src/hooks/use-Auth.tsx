import { Session } from "@supabase/supabase-js";

import { useEffect, useContext, createContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { useSupabase } from "./use-SupaBase";

// type USER = {
//   id: string;
//   avatar_url: string | null;
//   email: string | null;
//   userName: string | null;
// };

// interface ContextI {
//   user: USER | null;
//   isLoading: boolean;
//   error: any;
//   SignUp: (email: string, password: string) => Promise<string | null>;
//   signOut: () => Promise<void>;
//   SignInWithEmail: (email: string, password: string) => Promise<string | null>;
// }
// const Context = createContext<ContextI>({
//   user: null,
//   error: null,
//   isLoading: true,
//   signOut: async () => {},
//   SignUp: async (email: string, password: string) => null,
//   SignInWithEmail: async (email: string, password: string) => null,
// });

// export default function SupabaseAuthProvider({
//   session,
//   children,
// }: {
//   session: null | Session;
//   children: React.ReactNode;
// }) {
//   const supabase = useSupabase();
//   const navigate = useNavigate();

//   const SignUp = async (email: string, password: string) => {
//     const { data, error } = await supabase.auth.signUp({ email, password });
//     if (error) {
//       return error.message;
//     } else {
//       return null;
//     }
//   };

//   const getUser = async () => {
//     const { data: user, error } = await supabase
//       .from("users")
//       .select("*")
//       .eq("id", session?.user?.id)
//       .single();
//     if (error) {
//       console.log(error);
//       return null;
//     } else {
//       return user;
//     }
//   };

//   const {
//     data: user,
//     error,
//     isLoading,
//   } = useQuery({
//     queryKey: [session ? "user-session" : null],
//     queryFn: getUser,
//   });

//   const SignInWithEmail = async (email: string, password: string) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       return error.message;
//     }

//     return null;
//   };
//   const signOut = async () => {
//     await supabase.auth.signOut();
//     navigate("/");
//   };

//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, Session) => {
//       if (event === "SIGNED_IN") {
//         navigate("/search");
//       } else if (event === "SIGNED_OUT") {
//         navigate("/");
//       }
//     });
//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [navigate, session?.access_token, supabase]);

//   const value = {
//     user,
//     error,
//     SignUp,
//     SignInWithEmail,
//     signOut,
//     isLoading,
//   };
//   return (
//     <Context.Provider value={value}>
//       <>{children}</>
//     </Context.Provider>
//   );
// }

// export const useAuth = () => {
//   let context = useContext(Context);
//   if (context === undefined) {
//     throw new Error("useAuth must be used inside SupabaseAuthProvider");
//   } else {
//     return context;
//   }
// };
