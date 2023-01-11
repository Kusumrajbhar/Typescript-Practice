import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export const RefSecondExp = () => {
  const { register, handleSubmit } = useForm();

  const inputRef = useRef<Array<HTMLDivElement | null>>([]);
  const first = React.useRef<HTMLInputElement>(null);
  const second = React.useRef<HTMLInputElement>(null);
  const button = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    first?.current?.focus();
  }, []);

  const firstFocus = (e: any) => {
    if (e.key === "Enter") {
      second?.current?.focus();
    }
  };

  const secondFocus = (e: any) => {
    e.key === "Enter" && button?.current?.focus();
  };
  const buttonFocus = (e: any) => {
    e.key === "Enter" && alert("submitted");
  };

  const handler = (idx: any) => (e: any) => {
    const next = inputRef.current[idx + 1];
    if (e.key === "Enter" && next) {
      next.focus();
    }
  };

  return (
    <div>
      <input
        id="name"
        type="text"
        placeholder="name"
        {...register("email", { required: true, maxLength: 10 })}
        // ref={first}
        ref={(el) => (inputRef.current[1] = el)}
        onKeyDown={handler}
      />
      <br />
      <input
        // ref={second}
        type="text"
        placeholder="email"
        ref={(el) => (inputRef.current[2] = el)}
        onKeyDown={handler}
      />
      <br />
      <button ref={button} onKeyDown={buttonFocus}>
        Submit
      </button>
    </div>
  );
};
