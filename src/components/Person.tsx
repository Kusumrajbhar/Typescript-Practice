import React from "react";

type personProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

const Person = ({ name }: personProps) => {
  return (
    <div>
      {name.firstName} {name.lastName}
    </div>
  );
};

export default Person;
