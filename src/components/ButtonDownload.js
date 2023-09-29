import "../stylesheets/ButtonDownload.css";
function ButtonDownload(props) {
  return (
    <div>
      <div className="ButtonDownload">
        <button href="path_to_file" download="proposed_file_name">
          <span>{props.icon}</span>
          <span>{props.title}</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonDownload;
