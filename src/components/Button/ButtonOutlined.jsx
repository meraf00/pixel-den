function ButtonOutlined({ className, onClick, children }) {
  const defaultColor =
    "bg-transparent border border-secondary-300 text-on-secondary-300 hover:bg-secondary-300 hover:text-on-secondary-200";

  return (
    <button
      className={`
          flex      
          flex-grow
          flex-nowrap
          whitespace-nowrap
          items-center
          justify-center      
          px-6 py-2
          rounded      
          shadow-md               
          hover:shadow-lg
          transition ease-in-out duration-500 ${className ?? defaultColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonOutlined;
