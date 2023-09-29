import "./EducationTimeline.css";

function EducationTimeline() {
  return (
    <div className="EducationTimelineContainer">
      <div className="EducationTimeline">
        <div className="EducationTimelineElement">
          <div className="EducationTimelineElement_circle"></div>
          <p className="EducationTimelineElement_time">2022-actually</p>
          <p className="EducationTimelineElement_title">Computer Engineering</p>
        </div>

        <div className="EducationTimelineElement">
          <div className="EducationTimelineElement_circle"></div>
          <p className="EducationTimelineElement_time">2022-2023</p>
          <p
            className="EducationTimelineElement_title"
            style={{ animationDelay: "0.3s" }}
          >
            React certificate
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationTimeline;
