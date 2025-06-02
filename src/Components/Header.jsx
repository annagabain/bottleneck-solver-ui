import React from "react";

import { useState } from "react";
import BottleAnimation from "./BottleAnimation";

const Header = () => {
  const [logoVisible, setLogoVisible] = useState(false);

  return (
    <header className="bg-[#faedd8] text-[#1e1e1e] py-4 px-6 flex items-center justify-between shadow-md">
      <div>
        {!logoVisible && (
          <BottleAnimation onComplete={() => setLogoVisible(true)} />
        )}
        {logoVisible && (
          <img
            src="/bottle-image.png"
            alt="Logo"
            className="absolute top-4 left-4 w-16 h-16"
          />
        )}
      </div>
      <div>
        <h1 className="text-2xl font-bold">Bottleneck Solver</h1>
        <h1 className="text-xl font-semibold">AI-Powered Workflow Planning</h1>
      </div>
    </header>
  );
};

export default Header;
