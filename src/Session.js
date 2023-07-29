import { useState } from "react";
import classes from "./Session.module.css";
import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";

const Session = () => {
  const [sessionLength, setSessionLength] = useState(25);

  const increase = () => {
    if (sessionLength < 60) setSessionLength((prevLength) => prevLength + 1);
  };

  const decrease = () => {
    if (sessionLength > 1) setSessionLength((prevLength) => prevLength - 1);
  };

  return (
    <div>
      <p className={classes.title}>Session Length</p>
      <span onClick={increase} className={classes.arrow}>
        <ImArrowUp2 style={{ fontSize: "20px" }} />
      </span>
      <span className={classes.sessionlength}>{sessionLength}</span>
      <span onClick={decrease} className={classes.arrow}>
        <ImArrowDown2 style={{ fontSize: "20px" }} />
      </span>
    </div>
  );
};

export default Session;
