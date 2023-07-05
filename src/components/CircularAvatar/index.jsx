function CircularAvatar(props) {
  if (props.src)
    return (
      <img
        className="w-12 h-12 rounded-ful"
        src={props.src}
        alt={props.alt ?? "Circular avatar"}
      />
    );
  else {
    return (
      <div
        className="w-12 h-12 rounded-full
                bg-secondary-400 text-on-secondary-500
                shadow-lg
                font-bold text-lg 
                flex items-center justify-center"
      >
        {props.letter ?? "A"}
      </div>
    );
  }
}

export default CircularAvatar;
