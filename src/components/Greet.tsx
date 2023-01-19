import React, { FC } from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn?: boolean; //? <- adding this will not throw error if will not pass any such props but for this will have to give default value while destructing
  children?: JSX.Element; //sometimes not accessing children hence write this
};

const Greet = ({ isLoggedIn = false, messageCount, name }: GreetProps) => {
  //always use destructuring of props
  return (
    <div>
      {isLoggedIn
        ? `Welcome ${name}. You have ${messageCount} unread messages`
        : `Welcome`}
    </div>
  );
};

export default Greet;
