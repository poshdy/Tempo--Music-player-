import { Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-Auth";

import React, { useState } from "react";
import UploadImg from "@/components/UploadImg";
import { useToast } from "@/components/ui/use-toast";
import { useSupabase } from "@/hooks/use-SupaBase";

type Props = {};

const Dashboard = (props: Props) => {
  const [username, setUsername] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { user, signOut } = useAuth();
  const Supabase =useSupabase()
  const {toast}  = useToast()
  

  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        setLoading(true)
        const {error} = await Supabase.from('users').update({user_name:username}).eq('id',user?.id)
        toast({title:'updated'})
    } catch (error) {
        console.error(error)
    }finally{
        setLoading(false)
        setUsername('')
    }
  };


  return (
    <Wrapper className="py-40">
      <UploadImg/>
      <h1>{user?.user_name && `Hello ${user.user_name}`}</h1>
      <form action="" onSubmit={handleSubmit}>
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
          <Button type="submit" disabled={loading}>
            {loading ? "Loading ..." : "Update"}
          </Button>
        </div>
      </form>
      <Button onClick={signOut}>Logout</Button>
    </Wrapper>
  );
};

export default Dashboard;
