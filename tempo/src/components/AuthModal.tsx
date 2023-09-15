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
// import { useAuth } from "@/hooks/use-Auth";
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
  const navigate = useNavigate();

  const { isOpen, onClose } = useModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const isModalOpen = isOpen;

  const handleClose = () => {
    onClose();
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setError(null);
  //   try {
  //     await SignUp(email, password);
  //     if (error) {
  //       setError(error);
  //     }
  //   } catch (error) {
  //     console.log("Something went wrong!");
  //   }
  // };
  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex items-center justify-center gap-3">
          <form>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">submit</button>
          </form>
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
