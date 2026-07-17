import { FaLink, FaGithub } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { myProjects } from "./myProjects";
import "./Main.css";
function Product({ active, categories }) {
  return (
    <>
      {myProjects.map((product, index) => {
        if (product.category.includes(active) || active === "all") {
          return (
            <div className="product" key={index}>
              <img src={product.imgPath} alt={product.projectTitle} />
              <div className="title_prod">
                <h3>{product.projectTitle}</h3>
              </div>
              <div className="desc-lines">
                {product.desc.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="info">
                <div className="icons_of_prod">
                  <a target="_blank" href={product.link}>
                    <FaLink />
                  </a>
                  <a target="_blank" href={product.gitHub}>
                    <FaGithub />
                  </a>
                </div>
                <div className="more_prod">
                  <button>More</button>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </>
  );
}

export default Product;
