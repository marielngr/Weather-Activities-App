export default function Form({ onAddActivity }) {
  function getData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onAddActivity(data);
  }

  return (
    <form onSubmit={getData}>
      <h2>Add new Activity:</h2>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name"></input>

      <label htmlFor="activity-weather">Good-weather activity:</label>
      <input
        type="checkbox"
        id="activity-weather"
        name="activity-weather"
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
}
