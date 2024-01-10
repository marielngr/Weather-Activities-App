import Form from "./components/Form/Form.js";

function App() {
  function handleAddActivity(data) {
    //console.log(data);
  }

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
