import React from "react";
import SayText from "./Looks/SayText";
import SayTextSecs from "./Looks/SayTextSecs";
import Show from "./Looks/Show";
import Hide from "./Looks/Hide";
import MoveSteps from "./Motion/MoveSteps";
import TurnLeft from "./Motion/TurnLeft";
import TurnRight from "./Motion/TurnRight";
import PointInDirection from "./Motion/PointInDirection";
import Repeat from "./Control/Repeat";
import RepeatForever from "./Control/RepeatForever";
import WaitSeconds from "./Control/WaitSeconds";

const CompIDs = (item) => {
  if (item.id === "SAY_TEXT_WITH_SECS")
    return <SayTextSecs key={item.index} data={item} />;
  if (item.id === "SAY_TEXT") return <SayText key={item.index} data={item} />;
  if (item.id === "SHOW") return <Show key={item.index} />;
  if (item.id === "HIDE") return <Hide key={item.index} />;
  if (item.id === "MOVE_STEPS")
    return <MoveSteps key={item.index} data={item} />;
  if (item.id === "TURN_LEFT") return <TurnLeft key={item.index} data={item} />;
  if (item.id === "TURN_RIGHT")
    return <TurnRight key={item.index} data={item} />;
  if (item.id === "POINT_IN_DIRECTION")
    return <PointInDirection key={item.index} data={item} />;
  if (item.id === "WAIT_SECONDS")
    return <WaitSeconds key={item.index} data={item} />;
  if (item.id === "REPEAT") return <Repeat key={item.index} data={item} />;
  if (item.id === "REPEAT_FOREVER") return <RepeatForever key={item.index} />;
  return item.id;
};

export default CompIDs;
