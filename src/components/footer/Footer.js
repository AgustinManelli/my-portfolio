import "./Footer.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineFile } from "react-icons/ai";
import Button from "../Button";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <p>Agustín Manelli - {year}</p>
        <div className="footerLinks">
          <Button
            icon={<AiFillGithub />}
            name=""
            link="https://github.com/AgustinManelli"
          />
          <Button
            icon={<AiFillLinkedin />}
            name=""
            link="https://www.linkedin.com/in/agustinmanelli/"
          />
          {/*
          <Button
            icon={<AiOutlineFile />}
            name=""
            link="https://github.com/AgustinManelli"
          />
  */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
