const Dialog = ({ children }) => {
  return (
    <div className="flex fixed w-screen h-screen backdrop-blur bg-gray bg-opacity-30 z-50 top-0 animate-fadein items-center justify-center">
      {children}
    </div>
  );
};

export default Dialog;
