import "./EditForm.css";

export default function EditForm({ onEditActivity, onSaveEditedActivity, id }) {
  function getEditedActivity(event) {
    event.preventDefault();
    const newActivity = event.target.editActivity.value;
    onSaveEditedActivity(id, newActivity);
    onEditActivity();
  }

  return (
    <form className="edit-form" onSubmit={getEditedActivity}>
      <input
        type="text"
        aria-label="Input Field to edit entry"
        placeholder="edit activity..."
        name="editActivity"
      ></input>
      <div className="button-container">
        <button type="button" onClick={() => onEditActivity()}>
          ❌
        </button>
        <button type="submit">☑️</button>
      </div>
    </form>
  );
}
