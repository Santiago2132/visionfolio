import React from "react";
import { Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-content2">
      <div className="max-w-7xl mx-auto">
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
              className="w-64 h-64 rounded-xl shadow-lg"
              radius="lg"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
            <p className="text-lg mb-4 text-foreground-600">
              Hi, I'm Santiago Maldonado Rojas, a multi-disciplinary developer with a passion for creating 
              elegant solutions to complex problems.
            </p>
            <p className="text-lg mb-6 text-foreground-600">
              With expertise spanning mobile development, artificial intelligence, and web technologies, 
              I bring a unique perspective to every project. I believe in writing clean, maintainable code 
              that delivers exceptional user experiences.
            </p>
            <p className="text-lg mb-6 text-foreground-600">
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