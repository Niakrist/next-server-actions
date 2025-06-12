"use client";
import { deleteUser } from "@/action/user.action";
import React, { useTransition } from "react";

interface IRemoveButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  id: string;
}

const RemoveButton = ({
  id,
  className,
  ...props
}: IRemoveButtonProps): React.JSX.Element => {
  const [isPending, startTransition] = useTransition();
  const handleRemove = async (id: string) => {
    startTransition(async () => {
      const res = await deleteUser(id);
    });
  };

  return (
    <button onClick={() => handleRemove(id)} className={className} {...props}>
      {isPending ? "Удаляется" : "del"}
    </button>
  );
};

export default RemoveButton;
