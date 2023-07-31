import React from "react";

export default function Separator({ children, animateOnHover, className }) {
  if (animateOnHover) {
    return (
      <div className="flex gap-2 items-center group">
        <hr
          className={`flex-grow opacity-30 group-hover:border
          group-hover:border-secondary-100 saturate-200          
          group-hover:opacity-100 transition-color duration-300 ${className}`}
        />
        <span
          className="opacity-80         
        group-hover:opacity-100
        group-hover:text-black
        transition-color duration-300
        saturate-200"
        >
          {children}
        </span>
        <hr
          className={`flex-grow opacity-30 group-hover:border
          group-hover:border-secondary-100 saturate-200 
          group-hover:opacity-100 transition-color duration-300 ${className}`}
        />
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-center">
      <hr className="flex-grow opacity-30" />
      <span className="opacity-80">{children}</span>
      <hr className="flex-grow opacity-30" />
    </div>
  );
}
