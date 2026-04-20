import "./Projects.css";
import ProjectsItems from "./ProjectsItems";
import logo from "../../assets/ISOTIPO.svg";
import laespumitalogo from "../../assets/laespumita.svg";
import { FaHeart } from "react-icons/fa";
import bepixel_logobg from "../../assets/BEPIXEL_LOGOBG.svg";
import bepixel2_logobg from "../../assets/BEPIXEL2_LOGOBG.svg";
import laespumita_logobg from "../../assets/LAESPUMITA_LOGOBG.svg";
import impuestar_logobg from "../../assets/IMPUESTAR_LOGOBG.svg";
import alino_logobg from "../../assets/alinoLogo.svg";
import alino2_logobg from "../../assets/alinoLogo3.webp";

function Projects() {
  return (
    <section className="ProjectsContainer">
      <header className="ProjectsHeader">
        <h1>Mis proyectos</h1>
      </header>
      <div className="Projects">
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2026</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={alino_logobg}
              year="2026"
              date="Mar 15, 2026"
              title="Alino"
              desc="Plataforma colaborativa de gestión de tareas para estudiantes que integra planificación inteligente asistida por IA y sistemas de suscripción, diseñada para maximizar la productividad académica."
              tags={[
                "Next.js",
                "TypeScript",
                "Supabase",
                "Zustand",
                "AI",
                "Mercado Pago",
                "Motion",
              ]}
              link="https://usealino.com"
              repo="https://github.com/AgustinManelli/alino"
              color="#7D189D"
              logobg={alino2_logobg}
              progress={true}
            />
          </div>
        </div>
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2025</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={laespumitalogo}
              year="2025"
              date="Dic 4, 2025"
              title="La Espumita"
              desc="Sistema integral de gestión comercial y control de inventario diseñado para optimizar la operativa diaria. Incluye dashboards interactivos para métricas financieras y una arquitectura robusta basada en API Routes de Laravel. (Version 2)"
              tags={[
                "React",
                "Laravel",
                "MySQL",
                "Vite",
                "Motion",
                "Zustand",
                "Lightweight Charts",
                "REST API",
              ]}
              link="https://sistema.laespumita.com.ar"
              repo="https://github.com/AgustinManelli/laespumita"
              color="#008fd2"
              logobg={laespumita_logobg}
            />
          </div>
        </div>
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2024</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={laespumitalogo}
              year="2024"
              date="Jan 4, 2024"
              title="La Espumita (Legacy)"
              desc="Herramienta de análisis comercial y calculadora de costos corporativos con procesamiento 100% local. Enfocada en la agilidad del lado del cliente, utiliza gráficos dinámicos para proyectar métricas sin necesidad de persistencia en servidor. (Primer version)"
              tags={[
                "React",
                "Vite",
                "Framer Motion",
                "Lightweight Charts",
                "Client-side Logic",
              ]}
              link="https://laespumita.vercel.app/"
              repo="https://github.com/AgustinManelli/laespumita-sistema-frontend"
              color="#008fd2"
              logobg={laespumita_logobg}
            />
          </div>
        </div>
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2023</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={logo}
              year="2023"
              date="mar 3, 2023"
              title="bepixel"
              desc="Página web para agencia de diseño gráfico con buscador de herramientas."
              tags={["React", "FramerMotion", "i18next"]}
              link="https://bepixel.vercel.app/"
              repo="https://github.com/AgustinManelli/bepixel"
              color="#e10098"
              logobg={bepixel2_logobg}
            />
            <ProjectsItems
              logo={undefined}
              icon={
                <FaHeart
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "10px",
                  }}
                />
              }
              year="2023"
              date="sep 20, 2023"
              title="My protfolio"
              desc="Mi propio portafolio creado con algunas tecnologías de mi TechStack"
              tags={["React", "FramerMotion", "i18next"]}
              repo="https://github.com/AgustinManelli/my-portfolio"
              color="#bc03ff"
              logobg={bepixel_logobg}
              iconbg={
                <FaHeart
                  style={{
                    position: "absolute",
                    right: "-30%",
                    width: "350px",
                    height: "auto",
                    opacity: "0.05",
                  }}
                />
              }
            />
          </div>
        </div>
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2022</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={impuestar_logobg}
              year="2022"
              date="may 1, 2022"
              title="Impuestar keylogger"
              desc="Keylogger encapsulado en aplicación de cálculo de impuestos para Argentina con Python."
              tags={["Python", "Tkinter"]}
              repo="https://github.com/AgustinManelli/Impuestarkeylogger"
              color="#0055ff"
              logobg={impuestar_logobg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
