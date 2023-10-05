import CertificationsItems from "./CertificationsItems";

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
        }}
      >
        <CertificationsItems color="#bc03ff" />
      </div>
    </section>
  );
}

export default Certifications;
