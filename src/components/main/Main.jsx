import { FaLink, FaGithub } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Main.css";
import proj1 from "../../assets/images/1.jpg";
import { myProjects } from "./myProjects";
import Product from "./Product";
import { act, useState } from "react";

export default function Main() {
  const [active, setActive] = useState("all");
  const handleNavClick = (name) => {
    setActive(name);
    setShowMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth", // احذفها لو عاوز الانتقال يكون فوري
    });
  };
  const categories = [
    {
      title: "All Projects",
      category: "all",
    },
    {
      title: "HTML & CSS",
      category: "html & css",
    },
    {
      title: "JavaScript",
      category: "html & css & js",
    },
    {
      title: "React",
      category: "react",
    },
  ];

  return (
    <div>
      <section className="main_section" id="projects">
        <div className="buttons">
          {categories.map((cat, index) => (
            <button
              className={active === cat.category ? "active" : ""}
              onClick={() => {
                setActive(cat.category);
              }}
              key={index}
            >
              {cat.title}
            </button>
          ))}
        </div>
        <div className="products">
          <Product active={active} />
        </div>
      </section>
    </div>
  );
}
