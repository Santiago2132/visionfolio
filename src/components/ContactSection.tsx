import React from "react";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-content2">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="p-6">
              <CardBody>
                <form className="space-y-6">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    variant="bordered"
                  />
                  <Input
                    label="Email"
                    placeholder="your.email@example.com"
                    type="email"
                    variant="bordered"
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell me about your project..."
                    variant="bordered"
                    minRows={4}
                  />
                  <Button 
                    color="primary" 
                    className="w-full"
                    endContent={<Icon icon="lucide:send" width={18} />}
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="p-6 h-full">
              <CardBody className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <p className="text-foreground-500 mb-8">
                    Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:mail" width={20} className="text-primary" />
                      <span>santiagomaldonadorojas054@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:map-pin" width={20} className="text-primary" />
                      <span>Girón Santander</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:phone" width={20} className="text-primary" />
                      <span>+57 3155470362</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Santiago2132"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button isIconOnly variant="flat" aria-label="GitHub">
                        <Icon icon="logos:github-icon" width={24} />
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/santiago-maldonado-rojas-4580b3276/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button isIconOnly variant="flat" aria-label="LinkedIn">
                        <Icon icon="logos:linkedin-icon" width={24} />
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