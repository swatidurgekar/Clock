import classes from "./Session.module.css";
import { ImArrowDown2, ImArrowUp2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { lengthActions } from "./Store/Lengths";

const Session = ({ play }) => {
  const sessionLength = useSelector((state) => state.lengths.sessionLength);
  const dispatch = useDispatch();

  const increase = () => {
    if (!play) {
      if (sessionLength < 60) {
        dispatch(lengthActions.increaseSession());
      }
    }
  };

  const decrease = () => {
    if (!play) {
      if (sessionLength > 1) {
        dispatch(lengthActions.decreaseSession());
      }
    }
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
