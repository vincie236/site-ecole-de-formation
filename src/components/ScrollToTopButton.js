import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScrollTop = debounce(() => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }, 100);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-3 text-white transition duration-300 bg-blue-800 rounded-full shadow-md bottom-4 right-4 hover:bg-blue-400"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
