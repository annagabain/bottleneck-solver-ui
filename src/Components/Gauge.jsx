import React from "react";
import { motion } from "framer-motion";

const Gauge = ({ value }) => {
  // Map value to rotation (-90° to 90°)
  const rotation = (value - 50) * 1.8;
 const tightOnTimeMessage = (
  <div className="bg-yellow-100 text-black px-6 py-3 rounded-lg mt-4 shadow-md">
    <h2 className="text-lg font-bold flex items-center">
      ⚠️ Looks Tight on Time
    </h2>
    <p className="text-sm mt-2">
      Consider adding buffer time for unforeseen delays, such as shipment issues or unexpected setbacks.
    </p>
  </div>
);

  // Define warning message if production is at risk
  const warning = value >= 50 && value < 80 ? tightOnTimeMessage : "";

  return (
    <div className="relative w-64 h-46 flex flex-col items-center">
        {/* <div> */}

      {/* Enlarged Gauge Background */}
      <svg viewBox="0 0 250 150" className="w-full">
        <path
          d="M 20 130 A 100 115 0 0 1 230 130"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="30"
        />
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="green" />
            <stop offset="50%" stopColor="yellow" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Clock-Style Pointer */}
      <motion.div
        className="absolute top-[10px] left-1/2 transform origin-bottom translate-x-[-50%]"
        animate={{ rotate: rotation }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-3 h-16 bg-black rounded-md shadow-lg"></div>
      </motion.div>

      {/* Warning Message if Tight on Time */}

      {warning && (
        <div>
          {warning}
        </div>
      )}

      {/* Label */}
      <div className="mt-2 text-lg font-semibold">{value}% Performance</div>
    </div>
  );
};

export default Gauge;
