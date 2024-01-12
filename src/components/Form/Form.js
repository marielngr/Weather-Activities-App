import "./Form.css";

export default function Form({ onAddActivity }) {
  function getData(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const isWeatherChecked = event.target.isForGoodWeather.checked;

    onAddActivity(name, isWeatherChecked);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form onSubmit={getData}>
      <h2>Add new Activity:</h2>
      <div className="inputContainer">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"></input>
      </div>
      <div className="inputContainer">
        <label htmlFor="isForGoodWeather">Good-weather activity:</label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
