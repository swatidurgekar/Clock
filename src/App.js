import { useDispatch } from "react-redux";
import "./App.css";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { lengthActions } from "./Store/Lengths";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [play, setPlay] = useState(false);

  const playHandler = () => {
    setPlay((prevValue) => !prevValue);
  };

  const refresh = () => {
    dispatch(lengthActions.refresh());
    setPlay(false);
  };

  return (
    <div className="App">
      <p className="title">25 + 5 Clock</p>
      <div className="lengths">
        <Break play={play} />
        <Session play={play} />
      </div>
      <Timer play={play} />
      <div className="icons">
        <span onClick={playHandler}>
          <FaPlay />
        </span>
        <span onClick={playHandler}>
          <FaPause />
        </span>
        <span onClick={refresh} className="refresh">
          <FiRefreshCw />
        </span>
      </div>
    </div>
  );
}

export default App;
