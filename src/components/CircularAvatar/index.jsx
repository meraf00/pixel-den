function CircularAvatar(props) {
  if (props.src)
    return (
      <img
        className="w-10 h-10 rounded-ful"
        src={props.src}
        alt={props.alt ?? "Avatar"}
      />
    );
  else {
    return (
      <div
        className="w-10 h-10 rounded-full
                bg-secondary-400 text-on-secondary-500
                shadow-lg
                font-bold text-lg 
                flex items-center justify-center"
      >
        {props.img ? <img src={props.img} alt="Avatar" /> : props.letter}
      </div>
    );
  }
}

export default CircularAvatar;
