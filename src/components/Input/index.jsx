import React, { useState } from "react";

export default function Input(props) {
  const [focused, setFocused] = useState(false);

  const type = props.type ?? "text";

  //bg-gradient-to-b from-primary-400 to-primary-200
  return (
    <div
      className={`bg-primary-200 bg-opacity-40
    rounded-xl    
    flex flex-col
    flex-grow
    px-6
    py-2
    transition-all duration-300
    border-2    
    ${
      focused
        ? "border-secondary-300 shadow shadow-secondary-0"
        : "border-transparent"
    }
    `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <label
        htmlFor={props.id}
        className={`
      text-xs 
      ${focused ? "text-secondary-0" : "text-gray-300 "}
      `}
      >
        {props.label}
      </label>
      <input
        id={props.id}
        className={`   
      bg-transparent      
      text-sm
      w-full      
      py-1
      outline-none
      border border-t-0 border-r-0 border-l-0 border-b-transparent focus:border-b-gray-400
      transition-colors duration-300`}
        type={type}
      />
    </div>
  );
}
