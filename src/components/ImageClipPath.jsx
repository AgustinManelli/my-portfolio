import "../stylesheets/ImageClipPath.css";

function ImageClipPath(props) {
  return (
    <div className="ImageClipPathContainer">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircle" clipPathUnits="objectBoundingBox">
            <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z"></path>
          </clipPath>
        </defs>
      </svg>
      <div
        className="ImageClipPath clip-img"
        style={{
          backgroundImage: `url(${props.src})`,
          height: `${props.h}`,
          width: `${props.w}`,
        }}
      ></div>
      <div
        className="ImageClipPathBlurred"
        style={{
          backgroundImage: `url(${props.src})`,
          height: `${props.h}`,
          width: `${props.w}`,
        }}
      ></div>
    </div>
  );
}

export default ImageClipPath;
