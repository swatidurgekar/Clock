import { useState } from "react";
import classes from "./Timer.module.css";

const Timer = () => {
  const [sec, setSec] = useState(25);
  const [millisec, setMillisec] = useState("00");

  return (
    <div className={classes.session}>
      <p className={classes.title}>Session</p>
      <div className={classes.timer}>
        <span>{sec}:</span>
        <span>{millisec}</span>
      </div>
    </div>
  );
};

export default Timer;
