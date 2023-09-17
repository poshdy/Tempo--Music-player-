import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import SupaBaseProvider from "./hooks/use-SupaBase.tsx";
import SupabaseAuthProvider from "./hooks/use-Auth.tsx";
import { supabase } from "./lib/supabaseClient.ts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const queryClient = new QueryClient();
const { data } = await supabase().auth.getSession();
// console.log(data)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <SupaBaseProvider>
          <SupabaseAuthProvider session={data.session}>
            <App />
            <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
          </SupabaseAuthProvider>
          <Toaster />
        </SupaBaseProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
