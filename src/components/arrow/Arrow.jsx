import { FaArrowUp } from "react-icons/fa";
import "./Arrow.css";
import { useEffect, useState } from "react";

function Arrow() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    });
  }, []);
  return (
    <>
      <a href="#" className={`arrow ${showArrow ? "" : "hide"} `}>
        <FaArrowUp />
      </a>
    </>
  );
}

export default Arrow;
{
  /*  */
}
