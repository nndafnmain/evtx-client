import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

export const Input = ({ label, error, registration, ...props }: InputProps) => {
  return (
    <div>
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input {...props} {...registration} className="input" />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
