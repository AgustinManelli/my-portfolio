import CertificationsItems from "./CertificationsItems";
import { BiLogoReact } from "react-icons/bi";
import utn from "../../assets/utn.svg";
import google from "../../assets/activategoogle.png";

function Certifications() {
  return (
    <section
      style={{ width: "100vw", height: "fit-content", marginTop: "100px" }}
    >
      <h1 style={{ color: "#fff" }}>prueba</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <CertificationsItems
          color="#bc03ff"
          thumbnail={utn}
          techstack={<BiLogoReact className="certificationTech" />}
          idbool={false}
          time="nov 2022"
          title="Testing de software"
        />
        <CertificationsItems
          color="#bc03ff"
          thumbnail={google}
          techstack={<BiLogoReact className="certificationTech" />}
          idbool={true}
          idcertification="X9C LYS 34A"
          time="apr 2022"
          title="Desarrollo web I"
        />
        <CertificationsItems
          color="#bc03ff"
          thumbnail={google}
          techstack={<BiLogoReact className="certificationTech" />}
          idbool={true}
          idcertification="X9C LYS 34A"
          time="apr 2022"
          title="Desarrollo web II"
        />
      </div>
    </section>
  );
}

export default Certifications;
