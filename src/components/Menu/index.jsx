import "./style.css";

export default function Navmenu(props) {
  return (
    <div
      className={`navmenu ${props.isOpen ? "open" : ""}`}
      onClick={props.onClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
