import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useModal } from "@/zustand/Modal";

type Props = {};

const AuthModal = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isOpen, onClose, onOpen } = useModal();
  const isModalOpen = isOpen;
  const handleClose = () => {
    onClose();
  };

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (email && password !== null) {
  //       try {
  //         const data = await createUserWithEmailAndPassword(
  //           auth,
  //           email,
  //           password
  //         );
  //         let dbInstance = collection(db, "users",data?.user?.uid);
  //         await addDoc(dbInstance,{
  //             id: data.user.uid,
  //             email: data.user.email,
  //             userName: data.user.displayName,
  //             avatar: data.user.photoURL,
  //         });
  //         onClose();
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //     setEmail("");
  //     setPassword("");
  //   };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex items-center justify-center gap-3">
          {/* <form onSubmit={handleSubmit}> */}
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">submit</button>
          {/* </form> */}
        </DialogDescription>
        <DialogFooter>
          Please sign up to access all the app features
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
