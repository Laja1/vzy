import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import Navbar from "./compoents/Navbar";
import Create from "./Pages/Create";
import Website from "./Pages/Website";
import Features from "./Pages/Features";
import Love from "./Pages/Love";
import Questions from "./Pages/Questions";
import { PiX } from "react-icons/pi";

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  return (
    <div className="bg-[#111] mx-auto h-screen w-full">
      <motion.div
        className="w-full"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          height: "5px",
          backgroundColor: "#fff",
        }}
      ></motion.div>
      <Navbar />
      <Create />
      <Website />
      <Features />
      <Love />
      <Questions />
    </div>
  );
}
