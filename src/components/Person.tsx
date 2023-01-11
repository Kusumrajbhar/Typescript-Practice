import React from "react";

type personProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

function Person(props: personProps) {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
}

export default Person;
