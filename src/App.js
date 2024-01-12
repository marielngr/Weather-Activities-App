import Form from "./components/Form/Form.js";
import { useEffect, useState } from "react";
import { uid } from "uid";
import List from "./components/List/List.js";
import ListItem from "./components/ListItem/ListItem.js";
import useLocalStorageState from "use-local-storage-state";
import Header from "./components/Header/Header.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
  }, []);

  function handleChangeFilter() {
    setWeather(!weather.isGoodWeather);
  }

  function handleAddActivity(name, isWeatherChecked) {
    setActivities([
      {
        id: uid(),
        name: name,
        isForGoodWeather: isWeatherChecked,
      },
      ...activities,
    ]);
  }
  if (!weather) {
    return null;
  }

  const filteredActivities = activities.filter(
    (activity) =>
      activity.isForGoodWeather === weather.isGoodWeather && activity
  );
  return (
    <div className="App">
      <button type="button" onClick={handleChangeFilter}>
        good/bad
      </button>
      <Header temperature={weather.temperature} condition={weather.condition} />
      <Form onAddActivity={handleAddActivity} />
      <List
        title={
          weather.isGoodWeather
            ? "The weather is awesome! You can do now:"
            : "Bad weather outside! Here's what you can do now:"
        }
      >
        {filteredActivities.map((activity) => (
          <ListItem key={activity.id} newItem={activity.name} />
        ))}
      </List>
    </div>
  );
}

export default App;
