import './App.css';
import Timer from "./components/Timer.js";

function App() {
  return (
    <div className="App">
      <h1>Timer</h1>
      <Timer time={5000} autostart={false}/>
      <Timer onTick={(time) => console.log("Залишилось часу " + time)} time={20000} autostart={true} step={2000}/>
    </div>
  );
}

export default App;
