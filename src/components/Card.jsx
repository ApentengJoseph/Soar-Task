import React from "react";

const darkBackground = "linear-gradient(135deg, #2b2b36, #1a1a24)";
const lightBackground = "rgba(255, 255, 255, 1)";
const darkTextColor = "rgba(255, 255, 255, 1)";
const lightTextColor = "rgba(52, 60, 106, 1)";
const darkChipImage = "Chip_Card.png"; // Replace with your dark chip image path
const lightChipImage = "Chip_Card-dark.png"; // Replace with your light chip image path
const darkAtmLogo = "atm-logo.png"; // Replace with your dark ATM logo path
const lightAtmLogo = "atm-logo-dark.png";
const lightSubHeadingTextColor = "rgba(113, 142, 191, 1)";
const darkSubHeadingTextColor = "rgba(255, 255, 255, 0.7)";



const Card = ({
  balance,
  cardHolder,
  validThru,
  lastDigits,dark
}) => {

    const gradientBackground = dark ? darkBackground : lightBackground;
    const textColor = dark ? darkTextColor : lightTextColor;
    const chipImage = dark ? darkChipImage : lightChipImage;
    const atmLogo = dark ? darkAtmLogo : lightAtmLogo;
    const subHeadingTextColor = dark ? darkSubHeadingTextColor : lightSubHeadingTextColor;
  return (
    <div
      className={`relative card-border-radius ${!dark ? 'md:border-0 border border-[#DFEAF2]' : ''} w-100 h-100 rounded-lg text-white`}
      style={{
        background: gradientBackground,
      }}
    >
      {/* Top Section: Balance and Chip Icon */}
      <div className="flex p-6 justify-between items-start">
        <div>
          <p
            className="text-sm"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "14px",
              color: subHeadingTextColor,
            }}
          >
            Balance
          </p>
          <h2
            className="text-2xl font-bold"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "24px",
              color: textColor,
            }}
          >
            ${balance}
          </h2>
        </div>
        <div>
          <img
            src={chipImage}
            alt="Chip Icon"
            className="w-10 h-8"
          />
        </div>
      </div>

      {/* Cardholder Info */}
      <div className="p-6 bottom-16 flex">
        <div className="flex flex-col">
          <p
            className="text-sm"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "14px",
              color: subHeadingTextColor,
            }}
          >
            CARD HOLDER
          </p>
          <span
            className="font-medium"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "18px",
              color: textColor,
            }}
          >
            {cardHolder}
          </span>
        </div>
        <div className="flex ml-20 flex-col">
          <p
            className="text-sm"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "14px",
              color: subHeadingTextColor,
            }}
          >
            VALID THRU
          </p>
          <span
            className="font-medium"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "18px",
              color: textColor,
            }}
          >
            {validThru}
          </span>
        </div>
      </div>

      {/* Card Number and Logo Section */}
      <div
        className={`bottom-0 w-full p-6 flex justify-between ${!dark ? 'md:border-0 border border-[#DFEAF2]' : ''}`}
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",
        }}
      >
        <p
          className="text-lg font-medium tracking-wide"
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 600,
            fontSize: "22px",
            lineHeight: "26px",
            color: textColor,
          }}
        >
          3778 **** **** {lastDigits}
        </p>
        <img
          src={atmLogo}
          alt="Card Logo"
          className="w-10 h-6"
        />
      </div>
    </div>
  );
};

export default Card;
