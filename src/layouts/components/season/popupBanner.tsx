import { useEffect, useRef, useState } from "react";
// import Snowfall from "react-snowfall";//for winter only
import "@/styles/closebutton.scss";
import Firework from "./firework";
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
    <div className="z-50 overflow-hidden w-full">
      {isOpen && (
        <div className=" bg-black bg-opacity-50 z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className=" p-8 rounded Relative  " ref={targetRef}>
            <div className="flex justify-end ">
              <button
                type="button"
                onClick={togglePopup}
                className="btn-close absolute hover:text-cyan-400 top-auto right-auto px-4 py-2"
              >
                <span className="icon-cross"></span>
                <span className="visually-hidden">Close</span>
              </button>
            </div>
            {children}
            <audio
              id="audio"
              style={{ display: "none" }}
              controls
              autoPlay
              loop
              src="https://res.cloudinary.com/derjssgq9/video/upload/v1703497713/xuan_Kh%C3%B4ng_B%E1%BA%A3n_Quy%E1%BB%81n_wxguhm.mp3?autoplay=1&loop=1&autopause=0&muted=1"
            ></audio>
          </div>
        </div>
      )}
      {isOpen && (
        <Firework></Firework>

        // <Snowfall //for winter only
        //   color="#fff"
        //   style={{
        //     position: "fixed",
        //     width: "100vw",
        //     height: "100vh",
        //     zIndex: 1000,
        //   }}
        // />
      )}
    </div>
  );
};

export default Popup;
