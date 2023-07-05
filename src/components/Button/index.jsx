function Button(props) {
  const defaultColor =
    "bg-secondary-400 text-on-secondary-400 hover:bg-secondary-300 hover:text-on-secondary-300";

  return (
    <button
      className={`
      flex      
      flex-grow
      items-center
      justify-center      
      px-6 py-2
      rounded      
      shadow-md               
      hover:shadow-lg
      transition ease-in-out duration-500 ${props.className ?? defaultColor}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
