import "./CertificationsItems.css";
function CertificationsItems(props) {
  return (
    <a
      href="https://uve.frc.utn.edu.ar/mod/customcert/verify_certificate.php?contextid=24526&code=cMoGvqV4ks"
      target="_blank"
      rel="noreferrer"
    >
      <div className="CertificationsItemsContainer">
        <div
          className="CertificationsItemsCircle"
          style={{
            backgroundColor: `${props.color}`,
          }}
        ></div>
        <div className="CertificationsItems">
          <p className="CertificationsItemsTime">{props.time}</p>
          <div className="CertificationsItemsIMGTXT">
            <img src={props.thumbnail} alt="certification logo" />
            <p className="CertificationsItemsTitle">{props.title}</p>
          </div>
          {props.idbool ? (
            <p className="CertificationsItemsId">id: {props.idcertification}</p>
          ) : undefined}
          {props.techstack}
        </div>
      </div>
    </a>
  );
}

export default CertificationsItems;
