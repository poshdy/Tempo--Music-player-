import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import SupabaseAuthProvider from "./hooks/use-Auth.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SupabaseProvider from "./hooks/use-SupaBase.tsx";
import { supabase } from "./lib/supabaseClient.ts";
import { Session } from "@supabase/supabase-js";

const [data,setData] = useState<any>()
useEffect(()=>{
  const getSession = async()=>{
    const {data} = await supabase.auth.getSession()
    setData(data)
  }
  getSession()

},[data.access_token])
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <SupabaseProvider>
          <SupabaseAuthProvider session={data}>
            <App />
            <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
          </SupabaseAuthProvider>
          <Toaster />
        </SupabaseProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
