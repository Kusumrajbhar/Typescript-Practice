import React from "react";
import { useForm } from "react-hook-form";

export const UseForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form>
      <input
        type="text"
        id="email"
        placeholder="email"
        {...register("email", { required: true, maxLength: 10 })}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
      />
      <br />
    </form>
  );
};
