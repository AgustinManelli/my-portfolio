import "../../stylesheets/HomeHeader.css";

function HomeHeader() {
  return (
    <>
      <div class="wrapper">
        <div class="gradient gradient-1"></div>
        <div class="gradient gradient-2"></div>
        <div class="gradient gradient-3"></div>
      </div>
      <div className="homeHeaderContainer">
        <section className="homeHeaderSections">
          <h1>Agustin Manelli</h1>
          <h2>asds</h2>
        </section>
        <section className="homeHeaderSections">
          <div className="homeHeaderSubSections">
            <div>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeHeader;
