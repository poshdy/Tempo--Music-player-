import { useAuth } from "@/hooks/use-Auth";
import { useModal } from "@/zustand/Modal";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  childern: React.ReactNode;
};

export default function ProtectedRoutes({ childern }: Props) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { onOpen } = useModal();
  if (!user) {
    return onOpen();
  }

  return <>{childern}</>;
}
