import me from "../../assets/images/me.jpeg";
import com from "../../assets/images/w.webp";

import "./Hero.css";

import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="img">
          <img src={me} alt="Abdelrahman" />
          <MdVerified />
        </div>

        <div className="info">
          <h1>Frontend Developer (React.js)</h1>

          <p>
            Front-End Developer specialized in React.js with experience building
            responsive and scalable web applications using Redux, REST APIs,
            Vite and Git.
          </p>

          <div className="socail">
            <a
              target="_blank"
              href="https://www.facebook.com/AbdElRahmanSabry59/"
            >
              <FaFacebook />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/abdelrhman-sabry-7b3a95307/"
            >
              <FaLinkedin />
            </a>

            <a target="_blank" href="https://github.com/AbdElRhman-Sabry59">
              <FaGithub />
            </a>
            <a target="_blank" href="https://wa.me/201143484067">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="prog">
        <div className="prog-glow"></div>

        <div className="prog-frame">
          <img className="com" src={com} alt="Developer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
