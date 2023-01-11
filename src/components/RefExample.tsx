import React, { useState, useEffect, useRef } from "react";
// import { button } from "bootstrap";

interface tryProps {}

export const RefExample: React.FC<tryProps> = (props) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const preName = useRef("");
  const inputRef = useRef();

  const a = 10;

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    preName.current = name;
  });

  //   useEffect(() => {
  //     setCount((pre) => pre + 1);
  //   }, [name]);

  // const focus = () => {
  //   inputRef.current?.focus();
  //   inputRef.current?.value = "some value";
  // };
  return (
    <div>
      <input
        // ref={inputRef}
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      {/* <button onClick={focus}>Focus</button> */}
      My name is {name} and it used to be {preName.current}
      <div>rendered {count} times</div>
      <h2>{renderCount.current}</h2>
      {a}
    </div>
  );
};
