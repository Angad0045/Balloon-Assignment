import "./App.css";
import React, { useState } from "react";
import Bg_Image from "./Assets/Symbol 3 copy.png";
import Pump_1 from "./Assets/Symbol 320003.png";
import Pump_2 from "./Assets/Symbol 320002.png";
import Pump_3 from "./Assets/Symbol 320001.png";
import Baloon from "./Assets/Symbol 100005.png";

function App() {
  const [isPumped, setIsPumped] = useState(false);
  const [balloonSize, setBalloonSize] = useState(0);
  const [balloonPosition, setBalloonPosition] = useState({
    right: "230px",
    bottom: "160px",
  });
  const [balloonFlying, setBalloonFlying] = useState(false);

  const maxBalloonSize = 240;

  const handleButtonClick = () => {
    if (balloonFlying) return;

    setIsPumped(true);

    setBalloonSize((prevSize) => {
      const newSize = prevSize + 60;
      if (newSize >= maxBalloonSize) {
        flyBalloon();
        return maxBalloonSize;
      }
      return newSize;
    });

    setTimeout(() => setIsPumped(false), 500);
  };

  const flyBalloon = () => {
    setBalloonFlying(true);

    const randomRight = `${Math.random() * 90}%`;
    const randomBottom = `${Math.random() * 50 + 20}%`;

    setBalloonPosition({ right: randomRight, bottom: randomBottom });

    setTimeout(() => {
      resetBalloon();
    }, 2000);
  };

  const resetBalloon = () => {
    setBalloonFlying(false);
    setBalloonSize(0);
    setBalloonPosition({ right: "131px", bottom: "170px" });
  };

  const burstBalloon = () => {
    setBalloonFlying(false);
    setBalloonSize(0);
    setBalloonPosition({ right: "131px", bottom: "170px" });
    alert("Balloon Burst!");
  };

  return (
    <div className="">
      <img
        className="relative min-h-screen min-w-screen"
        src={Bg_Image}
        alt="Bg_Image"
      />
      <div>
        <img
          className="absolute z-30 w-60 bottom-0 right-1"
          src={Pump_1}
          alt="Pump"
        />
        <img
          className="absolute z-20 w-60 bottom-5 right-[140px]"
          src={Pump_2}
          alt="Pump"
        />
        <button onClick={handleButtonClick}>
          <img
            className={`absolute z-10 w-60 right-1 bottom-[105px] transition-transform duration-500 transform ${
              isPumped ? "translate-y-5" : "-translate-y-10"
            }`}
            src={Pump_3}
            alt="Pump"
          />
        </button>
        <img
          className="absolute z-10 cursor-pointer transition-transform duration-500 transform"
          onClick={burstBalloon}
          style={{
            width: `${balloonSize}px`,
            height: `${balloonSize}px`,
            transformOrigin: "center bottom",
            right: balloonPosition.right,
            bottom: balloonPosition.bottom,
            transition: balloonFlying ? "all 2s ease-in-out" : "none",
          }}
          src={Baloon}
          alt="Balloon"
        />
      </div>
    </div>
  );
}

export default App;
