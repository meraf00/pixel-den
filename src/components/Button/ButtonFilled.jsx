function ButtonFilled(props) {
  const defaultColor =
    "bg-secondary-300 text-on-secondary-300 hover:bg-secondary-200 hover:text-on-secondary-200";

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

export default ButtonFilled;
