import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpider } from "@fortawesome/free-solid-svg-icons";

export const Empty = () => {
  return (
    <div className="flex flex-col gap-5 text-gray-400 font-extrabold text-2xl w-full text-center animate-pulse">
      <FontAwesomeIcon icon={faSpider} />
      <span className="select-none">Opps, nothing here!</span>
    </div>
  );
};
