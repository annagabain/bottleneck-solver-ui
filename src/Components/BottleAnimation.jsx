import { motion } from "framer-motion";
import { useState } from "react";

const BottleAnimation = ({ onComplete }) => {
  const [resolved, setResolved] = useState(false);

  return (
    <motion.div
      className="visible absolute top-1/2 left-1/2"
      initial={{ scale: 1 }}
      animate={{ scale: resolved ? 0.2 : 1, x: resolved ? "-80vw" : 0, y: resolved ? "-40vh" : 0 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => {
        setResolved(true);
        onComplete(); // Callback to update UI state
      }}
    >
      <img src="/bottle-image.png" alt="Bottle resolving" className="w-40 h-40" />
    </motion.div>
  );
};
export default BottleAnimation;
