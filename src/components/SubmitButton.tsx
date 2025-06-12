"use client";
import React from "react";
import { useFormStatus } from "react-dom";

interface ISubmitButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const SubmitButton = ({ className, ...props }: ISubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button {...props} className={className} type="submit" disabled={pending}>
      {pending ? "Отправка..." : "Отправить"}
    </button>
  );
};

export default SubmitButton;
