import "./App.css";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <p className="title">25 + 5 Clock</p>
      <div className="lengths">
        <Break />
        <Session />
      </div>
      <Timer />
      <div className="icons">
        <span>
          <FaPlay />
        </span>
        <span>
          <FaPause />
        </span>
        <span className="refresh">
          <FiRefreshCw />
        </span>
      </div>
    </div>
  );
}

export default App;
