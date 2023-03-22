import "./App.css";
import ClockList from "./components/ClockList";

function App() {
  const quantity = [1, 2, 3, 4];
  return (
    <div className="App">
      <ClockList quantity={quantity} />
    </div>
  );
}

export default App;
