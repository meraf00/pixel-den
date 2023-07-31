import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const ToolbarContainer = ({ title, titleIcon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        `
    fixed z-10
    left-0 bottom-0 
    lg:top-24 lg:right-0  lg:bottom-auto lg:left-auto
    px-4  
    lg:mx-20 
    w-full
    lg:w-1/4
    max-h-[30%] lg:max-h-none
    border shadow-xl shadow-gray-800
    rounded-t-xl lg:rounded-xl
    bg-white
    text-black  
     scrollbar-hidden
    ` + (open ? "overflow-auto " : "overflow-hidden ")
      }
    >
      <button
        className={
          "absolute right-0 py-4 mr-6 lg:hidden transition-transform duration-300 " +
          (open ? "" : "rotate-180")
        }
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div className="flex items-center gap-4 font-semibold p-3">
        <span className="flex items-center">{titleIcon}</span>
        <span className="flex items-center">{title}</span>
      </div>
      <div className={open ? "h-full" : "h-0 lg:h-full"}>{children}</div>
    </div>
  );
};
