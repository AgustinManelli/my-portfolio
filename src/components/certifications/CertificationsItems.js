import "./CertificationsItems.css";
function CertificationsItems(props) {
  return (
    <div className="CertificationsItemsContainer">
      <div
        className="CertificationsItemsCircle"
        style={{
          backgroundColor: `${props.color}`,
        }}
      ></div>
      <div className="CertificationsItems">
        <p>time/day</p>
        <img src={props.thumbnail} alt="certification logo" />
        <img src={props.techstack} alt="certification tech" />
      </div>
    </div>
  );
}

export default CertificationsItems;
