import { Link } from "react-router-dom";
import "./style.css";

export function NavLink(props) {
  // text-on-primary-300
  return (
    <>
      <Link
        className="px-3              
      text-gray-200
        transition-color ease-in-out duration-500        
        slide-hover-parent 
        hover:text-transparent                 
        "
        to={props.to}
        onClick={props.onClick}
      >
        <span
          className="pb-1 text-secondary-200 
        font-medium saturate-200 
        border-b border-b-secondary-200
        slide-hover 
        transition-all ease-in-out duration-500"
        >
          {props.children}
        </span>
        <span>{props.children}</span>
      </Link>
    </>
  );
}

export function Anchor(props) {
  return (
    <Link
      className={`ml-2 text-secondary-300 hover:text-secondary-100 ${props.className}`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}
