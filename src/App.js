import "./App.css";
import Card from "./components/Card";

function App() {
  const colors = ["#ccc", "#4c6ef5", "#82c91e", "#12b886", "#82c91e", "#ccc"];

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {colors.map((color) => {
        return <Card key={color} color={color} />;
      })}
    </div>
  );
}

export default App;
