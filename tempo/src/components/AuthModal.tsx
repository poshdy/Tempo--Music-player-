import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useModal } from "@/zustand/Modal";
import { useAuth } from "@/hooks/use-Auth";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useSupabase } from "@/hooks/use-SupaBase";

const AuthModal = () => {
  // const navigate = useNavigate();
  // const supabase = useSupabase();

  const { isOpen, onClose } = useModal();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState<any>();
  const isModalOpen = isOpen;
  const { signInWithGoogle } = useAuth();

  const handleClose = () => {
    onClose();
  };

  // const handleSubmit = async () => {
  //   try {
  //     const {error} = await supabase.auth.signInWithOAuth({
  //       provider:'google'
  //     })
  //     console.error(error)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex items-center justify-center gap-3">
          <Button onClick={signInWithGoogle}>Sign in with google</Button>
        </DialogDescription>
        {/* {error && "invalid credntials"} */}
        <DialogFooter>
          Please sign up to access all the app features
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
