import Form from "./components/Form/Form.js";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List/List.js";
import ListItem from "./components/ListItem/ListItem.js";

function App() {
  const [activities, setActivities] = useState([]);

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

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id} newItem={activity.name} />
        ))}
      </List>
    </div>
  );
}

export default App;
