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

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { AiFillGoogleCircle, AiOutlineLink } from "react-icons/ai";
import { useToast } from "./ui/use-toast";

const AuthModal = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { toast} = useToast();
  const { isOpen, onClose } = useModal();
  const isModalOpen = isOpen;
  const { signInWithGoogle, SignUpWithMagiclink } = useAuth();

  const handleClose = () => {
    onClose();
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const error = await SignUpWithMagiclink(email);
      if (error) {
        toast({ title: "invalid credintials" });
      } else {
        toast({ title: "Check your email for the login link!" });
      }
    } catch (error) {
      toast({ title: "Something went wrong!" });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="flex flex-col items-center justify-center space-y-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="">
              <Button onClick={signInWithGoogle} variant="outline">
                <AiFillGoogleCircle className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Login with magic link <AiOutlineLink className="mr-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
