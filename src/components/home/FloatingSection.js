import "./FloatingSection.css";

function FloatingSection() {
  return (
    <section
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
      }}
    >
      <footer className="homeHeaderfooterSection">
        <section></section>
        <section></section>
      </footer>
    </section>
  );
}

export default FloatingSection;
