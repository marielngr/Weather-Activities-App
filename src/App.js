import Form from "./components/Form/Form.js";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(name, isWeatherChecked) {
    setActivities([
      {
        name: name,
        isForGoodWeather: isWeatherChecked,
      },
      ...activities,
    ]);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
