import classes from "./Break.module.css";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { lengthActions } from "./Store/Lengths";

const Break = ({ play }) => {
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.lengths.breakLength);

  const increase = () => {
    if (!play) {
      if (breakLength < 60) {
        dispatch(lengthActions.increaseBreak());
      }
    }
  };

  const decrease = () => {
    if (!play) {
      if (breakLength > 1) {
        dispatch(lengthActions.decreaseBreak());
      }
    }
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
