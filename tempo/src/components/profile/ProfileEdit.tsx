import React, { SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-Auth";
import { useToast } from "../ui/use-toast";
import { useSupabase } from "@/hooks/use-SupaBase";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
type Props = {
    modal:boolean
    setModal:React.Dispatch<SetStateAction<boolean>>
};

const ProfileEdit = ({modal , setModal}: Props) => {
  const { user, signOut } = useAuth();
  const [username, setUsername] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const Supabase = useSupabase();
  const { toast } = useToast();
  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await Supabase.from("users")
        .update({ user_name: username })
        .eq("id", user?.id);
      toast({ title: "updated" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setUsername("");
    }
  };
  return (
    <Dialog open={modal} onOpenChange={()=>setModal(false)}>
      <DialogContent>
        <form className=" space-y-3" action="" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" value={user?.email} disabled />
          </div>
          <div>
            <Label htmlFor="username">Name</Label>
            <Input
              className="text-black"
              id="username"
              type="text"
              required
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Loading ..." : "Update"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEdit;
