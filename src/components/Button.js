import "../stylesheets/Button.css";

function Button(props) {
  return (
    <div className="buttonContainer">
      <a
        href={props.link}
        rel="noreferrer"
        target="_blank"
        className="am_button"
      >
        {props.icon}
        {props.name}
      </a>
    </div>
  );
}

export default Button;
