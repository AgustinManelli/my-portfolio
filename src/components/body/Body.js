import "../../stylesheets/Body.css";
import Titles from "../Titles";
function Body() {
  return (
    <div className="bodyContainer">
      <Titles text="Timeline" />
      <div className="timelineContainer">
        <div className="timelineElement"></div>
      </div>
    </div>
  );
}

export default Body;
