export default function Form() {
  return (
    <form>
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
