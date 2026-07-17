import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { BsMoonStars } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  const refMenu = useRef();
  const refOverlay = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [mood, setMood] = useState(
    localStorage.getItem("currentMood") ?? "dark",
  );

  useEffect(() => {
    if (mood === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("currentMood", mood);
  }, [mood]);

  useEffect(() => {
    if (showMenu) {
      refMenu.current.classList.add("show");
      refOverlay.current.classList.remove("hide");
    } else {
      refMenu.current.classList.remove("show");
      refOverlay.current.classList.add("hide");
    }
  }, [showMenu]);

  const handleNavClick = (name) => {
    setActive(name);
    setShowMenu(false);
  };

  return (
    <>
      <div className="overlay" ref={refOverlay}></div>
      <header className="header">
        <div className="logo">
          <CiMenuFries
            className="menu"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>
        <ul className="nav" ref={refMenu}>
          <li>
            <Link
              to="/"
              onClick={() => handleNavClick("home")}
              className={active === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => handleNavClick("blog")}
              className={active === "blog" ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => handleNavClick("projects")}
              className={active === "projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              onClick={() => handleNavClick("community")}
              className={active === "community" ? "active" : ""}
            >
              Community
            </Link>
          </li>
          {/* <li>
            <Link
              to="/aboutme"
              onClick={() => handleNavClick("aboutme")}
              className={active === "aboutme" ? "active" : ""}
            >
              About me
            </Link>
          </li> */}
        </ul>
        <div
          className="mode"
          onClick={() => setMood(mood === "dark" ? "light" : "dark")}
        >
          <BsMoonStars />
        </div>
      </header>
    </>
  );
}

export default Header;
