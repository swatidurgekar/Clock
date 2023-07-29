import { useEffect, useState } from "react";
import classes from "./Timer.module.css";
import { useSelector } from "react-redux";

const Timer = ({ play }) => {
  const breakLength = useSelector((state) => state.lengths.breakLength);
  const sessionLength = useSelector((state) => state.lengths.sessionLength - 1);
  const [seconds, setSeconds] = useState(sessionLength);
  const millisec = useSelector((state) => state.lengths.millisec);
  const [milliseconds, setMilliseconds] = useState(millisec);
  const [sessionorbreak, setSessionorbreak] = useState(true);

  useEffect(() => {
    if (sessionorbreak) {
      setSeconds(sessionLength);
      setMilliseconds(59);
    }
  }, [sessionLength, sessionorbreak]);

  useEffect(() => {
    if (!sessionorbreak) {
      setSeconds(breakLength);
      setMilliseconds(59);
    }
  }, [breakLength, sessionorbreak]);

  useEffect(() => {
    if (play && milliseconds > 0) {
      setTimeout(() => {
        setMilliseconds((prevValue) => prevValue - 1);
      }, 1000);
    } else if (milliseconds === 0 && seconds > 0) {
      setSeconds((prevValue) => prevValue - 1);
      setMilliseconds(59);
    } else if (milliseconds === 0 && seconds === 0) {
      setSessionorbreak((prevValue) => !prevValue);
      if (!sessionorbreak) {
        setSeconds(sessionLength);
        setMilliseconds(59);
      } else {
        setSeconds(breakLength - 1);
        setMilliseconds(59);
      }
    }
  }, [play, milliseconds, breakLength, seconds, sessionLength, sessionorbreak]);

  return (
    <div className={classes.session}>
      <p className={classes.title}>{sessionorbreak ? "Session" : "Break"}</p>
      <div className={classes.timer}>
        <span>{seconds}:</span>
        <span>{milliseconds}</span>
      </div>
    </div>
  );
};

export default Timer;
