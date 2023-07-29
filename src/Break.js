import { useState } from "react";
import classes from "./Break.module.css";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";

const Break = () => {
  const [breakLength, setBreakLength] = useState(5);

  const increase = () => {
    if (breakLength < 60) setBreakLength((prevLength) => prevLength + 1);
  };

  const decrease = () => {
    if (breakLength > 1) setBreakLength((prevLength) => prevLength - 1);
  };

  return (
    <div>
      <p className={classes.title}>Break Length</p>
      <span onClick={increase} className={classes.arrow}>
        <ImArrowUp2 style={{ fontSize: "20px" }} />
      </span>
      <span className={classes.breaklength}>{breakLength}</span>
      <span onClick={decrease} className={classes.arrow}>
        <ImArrowDown2 style={{ fontSize: "20px" }} />
      </span>
    </div>
  );
};

export default Break;
