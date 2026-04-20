import "./EducationTimeline.css";

function EducationTimeline() {
  return (
    <div className="EducationTimelineContainer">
      <div className="EducationTimeline">
        {/* Ingeniería Informática */}
        <div className="EducationTimelineElement">
          <div className="EducationTimelineElement_circle"></div>
          <p className="EducationTimelineElement_time">2022 - Actualidad</p>
          <p className="EducationTimelineElement_title">
            Ingeniería Informática
          </p>
        </div>

        {/* Técnico Informático */}
        <div className="EducationTimelineElement">
          <div className="EducationTimelineElement_circle"></div>
          <p className="EducationTimelineElement_time">2024</p>
          <p
            className="EducationTimelineElement_title"
            style={{ animationDelay: "0.3s" }}
          >
            Técnico Informático
          </p>
        </div>

        {/* Software Testing */}
        <div className="EducationTimelineElement">
          <div className="EducationTimelineElement_circle"></div>
          <p className="EducationTimelineElement_time">2022</p>
          <p
            className="EducationTimelineElement_title"
            style={{ animationDelay: "0.6s" }}
          >
            Curso de Testing de Software
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationTimeline;
