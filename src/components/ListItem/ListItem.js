import "./ListItem.css";

export default function ListItem({ newItem, onDeleteActivity, id }) {
  return (
    <li className="ListItem">
      <span>{newItem}</span>
      <button onClick={() => onDeleteActivity(id)}>X</button>
    </li>
  );
}
