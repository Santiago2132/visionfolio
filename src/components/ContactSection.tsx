import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-[#f8f6f0] relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #f8f6f0 60%, #f3e9ff 100%)"
      }}
    >
      {/* Neo-brutalism background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[350px] h-[350px] rounded-[40px] z-0"
        style={{
          background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
          boxShadow: "12px 12px 0 #a18cd1, 0 0 0 6px #fff"
        }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 20, -20, 0],
          rotate: [0, 6, -6, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 w-[300px] h-[300px] rounded-[40px] z-0"
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
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-black drop-shadow-[4px_4px_0_#fff]">
            Get In Touch
          </h2>
          <p className="text-foreground-500 max-w-2xl mx-auto text-lg font-medium">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div 
            className="w-full flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="p-10 h-full w-full max-w-2xl mx-auto flex items-center justify-center border-4 border-black rounded-[32px] bg-white shadow-[8px_8px_0_#a18cd1]">
              <CardBody className="flex flex-col items-center justify-center h-full w-full">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-black drop-shadow-[2px_2px_0_#fff]">
                    Connect With Me
                  </h3>
                  <p className="text-foreground-500 mb-8 text-center font-medium">
                    Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 justify-center">
                      <Icon icon="lucide:mail" width={22} className="text-primary" />
                      <span className="font-semibold text-black">santiagomaldonadorojas054@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <Icon icon="lucide:map-pin" width={22} className="text-primary" />
                      <span className="font-semibold text-black">Girón Santander</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <Icon icon="lucide:phone" width={22} className="text-primary" />
                      <span className="font-semibold text-black">+57 3155470362</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10 w-full flex flex-col items-center">
                  <h4 className="text-lg font-bold mb-4 text-center text-black drop-shadow-[2px_2px_0_#fff]">Social Profiles</h4>
                  <div className="flex gap-6 justify-center">
                    <a
                      href="https://github.com/Santiago2132"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button isIconOnly variant="flat" aria-label="GitHub"
                        className="border-2 border-black rounded-xl bg-[#f3e9ff] shadow-[4px_4px_0_#a18cd1] hover:scale-110 transition-transform"
                      >
                        <Icon icon="logos:github-icon" width={28} />
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/santiago-maldonado-rojas-4580b3276/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button isIconOnly variant="flat" aria-label="LinkedIn"
                        className="border-2 border-black rounded-xl bg-[#fad0c4] shadow-[4px_4px_0_#fbc2eb] hover:scale-110 transition-transform"
                      >
                        <Icon icon="logos:linkedin-icon" width={28} />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};