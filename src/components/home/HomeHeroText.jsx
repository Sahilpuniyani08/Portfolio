import React from "react";
import Video from "./video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center mt-120 lg:mt-0 text-white">
      <p className='font-[font1] text-left float-right text-sm w-[40vw] lg:w-[20vw] absolute right-5 lg:bottom-30 bottom-20 leading-tight '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className="lg:text-[9.5vw]  text-[12vw]  uppercase lg:leading-[8vw] leading-[8vw] flex items-center justify-center">L'étincelle</div>
      <div className="lg:text-[9.5vw]  text-[12vw] uppercase lg:leading-[8vw] leading-[8w] flex items-start lg:-mt-3 mt-2 justify-center">qui<div className="lg:h-[8vw] h-[12vw] rounded-full overflow-hidden"><Video /> </div>génère</div>
      <div className="lg:text-[9.5vw]  text-[12vw] uppercase lg:leading-[8vw] leading-[8vw] flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
