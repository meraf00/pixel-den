import { Link } from "react-router-dom";

export function NavLink(props) {
  // text-on-primary-300
  return (
    <>
      <Link
        className="px-3              
      text-gray-200
      hover:text-secondary-300 
        transition-colors ease-in-out duration-500"
        to={props.to}
        onClick={props.onClick}
      >
        {props.children}
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
