import "./ListItem.css";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

export default function ListItem({
  newItem,
  onDeleteActivity,
  id,
  onSaveEditedActivity,
}) {
  const [editing, setEditing] = useState(false);

  function handleEditActivity() {
    setEditing(!editing);
  }
  return (
    <li className="ListItem">
      {!editing ? (
        <>
          <span>{newItem}</span>
          <div className="button-container">
            <button onClick={() => onDeleteActivity(id)}>🗑️</button>
            <button onClick={() => handleEditActivity()}>🖊️</button>
          </div>
        </>
      ) : (
        <EditForm
          onEditActivity={handleEditActivity}
          onSaveEditedActivity={onSaveEditedActivity}
          id={id}
        />
      )}
    </li>
  );
}
