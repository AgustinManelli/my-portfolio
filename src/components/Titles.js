import "../stylesheets/Titles.css";

function Titles(props) {
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        position: "relative",
        zIndex: "100px",
      }}
    >
      <div className="TitleDeco3"></div>
      <div className="TitleDeco2"></div>
      <div className="TitleDeco1"></div>
      <div className="TitlesBox">
        <h2 className="TitleText">{props.text}</h2>
      </div>
    </div>
  );
}

export default Titles;
