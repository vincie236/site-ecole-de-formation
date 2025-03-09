import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed p-3 text-white transition duration-300 bg-blue-700 rounded-full shadow-lg bottom-6 right-6 hover:bg-blue-800"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
