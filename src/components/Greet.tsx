import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name}. You have ${props.messageCount} unread messages`
        : `Welcome`}
    </div>
  );
}

export default Greet;
