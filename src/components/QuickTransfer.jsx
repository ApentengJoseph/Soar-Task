import React, { useRef, useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

const QuickTransfer = ({ contacts }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollableWidth =
        containerRef.current.scrollWidth - containerRef.current.scrollLeft;

      if (scrollableWidth > containerWidth) {
        const newPosition =
          scrollPosition + containerWidth > containerRef.current.scrollWidth
            ? containerRef.current.scrollWidth
            : scrollPosition + containerWidth;

        setScrollPosition(newPosition);
        containerRef.current.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;

      const newPosition =
        scrollPosition - containerWidth < 0
          ? 0
          : scrollPosition - containerWidth;

      setScrollPosition(newPosition);
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{ height: "90%" }}
      className="p-6 justify-around card-border-radius bg-white w-full flex flex-col space-y-6"
    >
      {/* Contacts Carousel */}
      <div className="flex items-center">
        {/* Left Arrow */}
        <div
          className={`flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer shadow-sm ${
            scrollPosition === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
        >
          <ArrowBackIos fontSize="medium" className="text-gray-600" />
        </div>

        {/* Contacts */}
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-hidden mt-5"
          style={{
            flexGrow: 1,
            scrollBehavior: "smooth",
          }}
        >
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-1 flex-shrink-0"
              style={{ width: "100px" }} // Adjust the width to control overlap
            >
              <img
                src={contact.image}
                alt={contact.name}
                style={{ borderRadius: "50%" }}
                className="min-w-[60px] max-w-[90px] rounded-full object-cover min-h-[70px] max-h-[90px]rounded-full border-gray-300"
              />
              <p className="text-sm font-bold text-darkText">{contact.name}</p>
              <p className="text-xs font-medium  text-darkText">
                {contact.role}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          className={`flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer shadow-sm ${
            containerRef.current &&
            scrollPosition + containerRef.current.offsetWidth >=
              containerRef.current.scrollWidth
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
        >
          <ArrowForwardIos fontSize="medium" className="text-gray-600" />
        </div>
      </div>

      {/* Input and Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-5 space-y-3 sm:space-y-0">
        {/* Label */}
        <label className="text-sm sm:text-md font-medium sm:font-bold text-textBlueLight sm:mr-3">
          Write Amount
        </label>

        {/* Input Field */}
        <div className="relative flex items-center w-full sm:w-auto">
          <input
            type="text"
            value="525.50"
            className="w-full sm:w-[70%] px-4 sm:px-6 py-2 sm:py-3 bg-[#EDF1F7] rounded-full text-textBlueLight font-medium sm:font-semibold text-sm sm:text-lg placeholder-[#A0AEC0] border border-transparent focus:outline-none focus:ring-2 focus:ring-[#D9E4FF]"
          />

          {/* Send Button */}
          <button
            className="absolute right-0 top-0 bottom-0 sm:mr-0 flex items-center justify-center px-4 py-2 sm:py-3 rounded-full bg-black text-white text-sm sm:text-lg font-medium sm:font-semibold shadow-lg hover:bg-gray-900 transition-all"
            style={{ width: "45%"}}
          >
            <span className="pr-1 sm:pr-2">Send</span>
            <img
              src="icons/send.png" /* Replace with your paper-plane icon path */
              alt="Send"
              className="w-4 h-4 sm:w-6 sm:h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
