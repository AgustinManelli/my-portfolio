import "../stylesheets/ButtonDownload.css";
function ButtonDownload(props) {
  return (
    <div>
      <div className="ButtonDownload">
        <a href={props.file} download={props.filename}>
          {props.icon}
          {props.title}
        </a>
      </div>
    </div>
  );
}

export default ButtonDownload;
