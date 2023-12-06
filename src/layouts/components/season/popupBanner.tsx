import { useEffect, useRef, useState } from "react";
import Snowfall from "react-snowfall";
import "@/styles/closebutton.scss";
const Popup = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const targetRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event) => {
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      setIsOpen(!isOpen);
      document.body.style.overflow = "";
    }
  };
  useEffect(() => {
    const stopScroll = () => {
      document.body.style.overflow = "hidden";
    };

    stopScroll();
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const togglePopup = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "";
  };

  return (
    <div className="z-50">
      {isOpen && (
        <div className=" bg-black bg-opacity-50 z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className=" p-8 rounded Relative  " ref={targetRef}>
            <div className="flex justify-end ">
              <button
                type="button"
                onClick={togglePopup}
                className="btn-close absolute   bg-blue-500 text-white px-4 py-2"
              >
                <span className="icon-cross"></span>
                <span className="visually-hidden">Close</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
      {isOpen && (
        <Snowfall
          color="#fff"
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
          }}
        />
      )}
    </div>
  );
};

export default Popup;
