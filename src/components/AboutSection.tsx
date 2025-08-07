import React from "react";
import { Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 bg-[#f8f6f0] relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #f8f6f0 60%, #f3e9ff 100%)"
      }}
    >
      {/* Neo-brutalism animated rounded diamonds */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-16 z-0"
        style={{
          width: "180px",
          height: "180px",
          background: "#fad0c4",
          borderRadius: "40px",
          boxShadow: "0 0 0 10px #fff, 8px 8px 0 0 #fbc2eb",
          transform: "rotate(45deg)"
        }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 20, -20, 0],
          rotate: [45, 51, 39, 45]
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-40 right-24 z-0"
        style={{
          width: "140px",
          height: "140px",
          background: "#e0c3fc",
          borderRadius: "32px",
          boxShadow: "0 0 0 8px #fff, 6px 6px 0 0 #a18cd1",
          transform: "rotate(45deg)"
        }}
        animate={{
          x: [0, -25, 25, 0],
          y: [0, -15, 15, 0],
          rotate: [45, 53, 37, 45]
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-0"
        style={{
          width: "100px",
          height: "100px",
          background: "#ffd1ff",
          borderRadius: "24px",
          boxShadow: "0 0 0 6px #fff, 4px 4px 0 0 #fbc2eb",
          transform: "rotate(45deg)"
        }}
        animate={{
          x: [0, -18, 18, 0],
          y: [0, 8, -8, 0],
          rotate: [45, 55, 35, 45]
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="md:w-1/3 flex justify-center">
            <Avatar
              src="https://i.ibb.co/1YT2tBg9/me-profile.png"
              className="w-64 h-64 rounded-[32px] shadow-[8px_8px_0_#a18cd1] border-4 border-black bg-white"
              radius="lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-black drop-shadow-[4px_4px_0_#fff]">
              About Me
            </h2>
            <p className="text-lg mb-4 text-foreground-600 font-medium">
              Hi, I'm Santiago Maldonado Rojas, a multi-disciplinary developer with a passion for creating 
              elegant solutions to complex problems.
            </p>
            <p className="text-lg mb-6 text-foreground-600 font-medium">
              With expertise spanning mobile development, artificial intelligence, and web technologies, 
              I bring a unique perspective to every project. I believe in writing clean, maintainable code 
              that delivers exceptional user experiences.
            </p>
            <p className="text-lg mb-6 text-foreground-600 font-medium">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical writing and mentorship.
            </p>
            <div className="flex gap-4">
              <a
                href="/CVC_Santiago_Maldonado.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button 
                  color="primary" 
                  className="border-2 border-black rounded-xl bg-[#7c3aed] text-white shadow-[4px_4px_0_#a18cd1] hover:scale-105 transition-transform font-bold"
                  endContent={<Icon icon="lucide:download" width={18} />}
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};