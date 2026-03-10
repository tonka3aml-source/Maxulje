import React from "react";
import styled from "styled-components";
import kap from "../img/favicon-max.png"; //import slike kapljice

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <img src={kap} alt="loading" />
        <div className="shadow"></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  .loader {
    position: relative;
    width: 160px;
    height: 220px;
  }

  .loader img {
    width: 120px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    animation: drop 2.4s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
    filter: drop-shadow(0 0 30px rgba(255, 220, 120, 0.9));
  }

  .shadow {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 14px;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 50%;
    filter: blur(8px);
    animation: shadow 2.4s ease-in-out infinite;
  }

  @keyframes drop {
    0% {
      top: -140px;
      transform: translateX(-50%) scale(0.9, 1.05);
    }

    55% {
      top: 70px;
      transform: translateX(-50%) scale(1.08, 0.85); /* razlije se 
    }

    68% {
      top: 40px;
      transform: translateX(-50%) scale(0.95, 1.05); /* odskoči */
    }

    80% {
      top: 70px;
      transform: translateX(-50%) scale(1.03, 0.9); /* mali bounce */
    }

    100% {
      top: -140px;
      transform: translateX(-50%) scale(0.9, 1.05);
    }
  }

  @keyframes shadow {
    0% {
      transform: translateX(-50%) scale(0.4);
      opacity: 0.15;
    }

    55% {
      transform: translateX(-50%) scale(1.2);
      opacity: 0.45;
    }

    80% {
      transform: translateX(-50%) scale(0.9);
      opacity: 0.3;
    }

    100% {
      transform: translateX(-50%) scale(0.4);
      opacity: 0.15;
    }
  }
`;

export default Loader;
