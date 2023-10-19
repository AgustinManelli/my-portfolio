import CertificationsItems from "./CertificationsItems";
import "./Certifications.css";
import { BiLogoReact } from "react-icons/bi";
import utn from "../../assets/utn.svg";
import google from "../../assets/activategoogle.png";

function Certifications() {
  return (
    <section className="CertificationsContainer">
      <div className="wrapper">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
      </div>
      <div className="CertificationsBackground"></div>
      <h1 style={{ color: "#fff", marginBottom: "50px", zIndex: "10" }}>
        Certifications
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <CertificationsItems
          color="#0078FF"
          thumbnail={utn}
          techstack={<BiLogoReact className="certificationTech" />}
          idbool={false}
          time="nov 2022"
          title="Testing de software"
          linktocertificate="https://uve.frc.utn.edu.ar/mod/customcert/verify_certificate.php?contextid=24526&code=cMoGvqV4ks"
        />
        <CertificationsItems
          color="#FFCD00"
          thumbnail={google}
          techstack={<BiLogoReact className="certificationTech" />}
          idbool={true}
          idcertification="X9C LYS 34A"
          time="apr 2022"
          title="Desarrollo web I"
          linktocertificate="https://learndigital.withgoogle.com/activate/validate-certificate-code"
        />
        <CertificationsItems
          color="#FFCD00"
          thumbnail={google}
          techstack={<BiLogoReact className="certificationTech" />}
          idbool={true}
          idcertification="5UE Z9C X8H "
          time="apr 2022"
          title="Desarrollo web II"
          linktocertificate="https://learndigital.withgoogle.com/activate/validate-certificate-code"
        />
      </div>
    </section>
  );
}

export default Certifications;
