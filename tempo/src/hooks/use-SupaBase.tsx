import { supabase } from "@/lib/supabaseClient";

import type { SupabaseClient } from "@supabase/auth-helpers-react";
import React, { useState, useContext, createContext } from "react";

// const Context = createContext<SupabaseClient | undefined>(undefined);
// export default function SupabaseProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [Supabase] = useState(() => supabase());

//   return (
//     <Context.Provider value={Supabase}>
//       <>{children}</>
//     </Context.Provider>
//   );
// }
// export const useSupabase = () => {
//   let context = useContext(Context);
//   if (context === undefined) {
//     throw new Error("useSupabase must used in supabase provider");
//   } else  return context;
  
// };
