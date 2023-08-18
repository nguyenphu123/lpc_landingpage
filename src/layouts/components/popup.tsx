import { useState } from "react";

const Popup = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          <div className="w-32"></div>

          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white w-32 "
          >
            Add
          </button>
        </div>
      </div>
      {isOpen ? (
        <div
          x-show="modalOpen"
          className="overflow-auto overflow-y-scroll fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
        >
          <div className="w-full max-w-[90%] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <span className="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
            {children}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={(e) => setIsOpen(!isOpen)}
                  className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popup;
