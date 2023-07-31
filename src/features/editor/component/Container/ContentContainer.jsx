import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

export const ContentContainer = ({
  children,
  handleDelete,
  handleShiftUp,
  handleShiftDown,
}) => {
  return (
    <div className="relative group">
      <div className="opacity-0 z-20 group-hover:opacity-100 absolute top-0 right-0 -translate-y-[115%] flex bg-white text-black p-3 rounded-2xl shadow-lg transition-all duration-300">
        <FontAwesomeIcon
          icon={faClose}
          className="text-red-400 pr-3 border-r-2 hover:text-red-600"
          onClick={handleDelete}
        />

        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-gray-400  px-3 border-r-2 hover:text-gray-600"
          onClick={handleShiftUp}
        />

        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-gray-400 pl-3 hover:text-gray-600"
          onClick={handleShiftDown}
        />
      </div>
      {children}
    </div>
  );
};
