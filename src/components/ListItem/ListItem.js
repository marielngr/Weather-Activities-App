import "./ListItem.css";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

export default function ListItem({ newItem, onDeleteActivity, id }) {
  const [editing, setEditing] = useState(false);

  function handleEditActivity() {
    setEditing(!editing);
    console.log(editing);
  }
  return (
    <li className="ListItem">
      {!editing ? <span>{newItem}</span> : <EditForm />}
      <div className="button-container">
        <button onClick={() => onDeleteActivity(id)}>🗑️</button>
        <button onClick={() => handleEditActivity()}>
          {!editing ? "🖊️" : "☑️"}
        </button>
      </div>
    </li>
  );
}
