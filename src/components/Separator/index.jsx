import React from "react";

export default function Separator(props) {
  return (
    <div className="flex gap-2 items-center">
      <hr className="flex-grow opacity-30" />
      <span className="opacity-80">{props.text}</span>
      <hr className="flex-grow opacity-30" />
    </div>
  );
}
