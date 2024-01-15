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

  const weatherAppUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();

    const interval = setInterval(fetchWeather, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  function handleDeleteActivity(idToRemove) {
    setActivities(activities.filter((activity) => activity.id !== idToRemove));
  }

  function handleSaveEditedActivity(id, newActivity) {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, name: newActivity } : activity
      )
    );
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
          <ListItem
            id={activity.id}
            key={activity.id}
            newItem={activity.name}
            onDeleteActivity={handleDeleteActivity}
            onSaveEditedActivity={handleSaveEditedActivity}
          />
        ))}
      </List>
    </div>
  );
}

export default App;

// function handleSetNewHeightForTree(id, height) {

//   setTrees(

//     trees.map((tree) => {

//       if (tree.id === id) return { ...tree, height };

//       return tree;

//     })
