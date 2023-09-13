import { v4 as uuidv4 } from "uuid";

export const generateUniqueID = () => uuidv4();

export const handleStartAnimation = (event) => {};

export const getStyle = (globalState, globalStyle, setGlobalStyle) => {
  globalState.forEach((item) => {
    if (item.id === "MOVE_STEPS") {
      setGlobalStyle([...globalStyle, moveSteps(item.steps)]);
    } else if (item.id === "TURN_LEFT") {
      setGlobalStyle([...globalStyle, turnLeft(item.turnLeft)]);
    } else if (item.id === "TURN_RIGHT") {
      setGlobalStyle([...globalStyle, turnRight(item.turnRight)]);
    }
  });
  console.log("styling : ", globalStyle);
};

export const moveSteps = (steps) => {
  return {
    transform: `translateX(${steps}px)`,
  };
};

export const turnLeft = (turnLeft) => {
  return {
    transform: `rotate(-${turnLeft}deg)`,
  };
};

export const turnRight = (turnRight) => {
  return {
    transform: `rotate(${turnRight}deg)`,
  };
};
