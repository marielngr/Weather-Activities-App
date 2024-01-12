import Form from "./components/Form/Form.js";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List/List.js";
import ListItem from "./components/ListItem/ListItem.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  //const isGoodWeather = false;
  const [isGoodWeather, setIsGoodWeather] = useState(false);

  function handleChangeFilter() {
    setIsGoodWeather(!isGoodWeather);
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

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather && activity
  );

  return (
    <div className="App">
      <button type="button" onClick={handleChangeFilter}>
        good/bad
      </button>
      <Form onAddActivity={handleAddActivity} />
      <List
        title={
          isGoodWeather
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
