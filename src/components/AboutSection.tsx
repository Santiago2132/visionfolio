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
      {/* Neo-brutalism background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 w-[320px] h-[320px] rounded-[40px] z-0"
        style={{
          background: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
          boxShadow: "12px 12px 0 #fbc2eb, 0 0 0 6px #fff"
        }}
        animate={{
          x: [0, -20, 20, 0],
          y: [0, -10, 10, 0],
          rotate: [0, -4, 4, 0]
        }}
        transition={{
          duration: 22,
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
                  className="border-2 border-black rounded-xl bg-[#f3e9ff] shadow-[4px_4px_0_#a18cd1] hover:scale-105 transition-transform font-bold"
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