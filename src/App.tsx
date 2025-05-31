import React from "react";
import { Icon } from "@iconify/react";
import { Button, Tabs, Tab, Card, CardBody, Avatar, Badge, Input, Textarea } from "@heroui/react";
import { motion } from "framer-motion";
import { HeroSection } from "./components/hero-section";
import { ProjectCard } from "./components/project-card";
import { SkillCard } from "./components/skill-card";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

export default function App() {
  const [selected, setSelected] = React.useState("mobile");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Add scroll handler for footer navigation links
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      
      {/* Main Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Projects</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Explore my work across different technologies and platforms
          </p>
        </motion.div>
        
        <div className="flex w-full flex-col">
          <Tabs 
            aria-label="Project categories" 
            selectedKey={selected} 
            onSelectionChange={setSelected}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "mx-auto mb-8",
              cursor: "w-full bg-primary"
            }}
          >
            <Tab key="mobile" title="Mobile Apps">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.filter(p => p.category === "mobile").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </Tab>
            <Tab key="ai" title="AI & ML">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.filter(p => p.category === "ai").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </Tab>
            <Tab key="web" title="Web Development">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.filter(p => p.category === "web").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </Tab>
          </Tabs>
        </div>
      </section>
      
      {/* About Me Section */}
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
                src="https://cdn.glitch.global/bf813e1f-7084-4504-ad2e-94db114fce8e/me_profile.png?v=1748665257463"
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
                <Button 
                  color="primary" 
                  endContent={<Icon icon="lucide:download" width={18} />}
                >
                  Download Resume
                </Button>
                <Button 
                  variant="flat" 
                  color="default"
                  endContent={<Icon icon="lucide:mail" width={18} />}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Technical Skills</h2>
            <p className="text-foreground-500 max-w-2xl mx-auto">
              Technologies and tools I've mastered throughout my career
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
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
                      <Button isIconOnly variant="flat" aria-label="GitHub">
                        <Icon icon="logos:github-icon" width={24} />
                      </Button>
                      <Button isIconOnly variant="flat" aria-label="LinkedIn">
                        <Icon icon="logos:linkedin-icon" width={24} />
                      </Button>
                      <Button isIconOnly variant="flat" aria-label="Twitter">
                        <Icon icon="logos:x" width={24} />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-divider">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Santiago Maldonado Rojas. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Button 
              variant="light" 
              onPress={() => scrollToSection('projects')} 
              className="text-foreground-500 hover:text-primary transition-colors"
            >
              Projects
            </Button>
            <Button 
              variant="light" 
              onPress={() => scrollToSection('about')} 
              className="text-foreground-500 hover:text-primary transition-colors"
            >
              About
            </Button>
            <Button 
              variant="light" 
              onPress={() => scrollToSection('skills')} 
              className="text-foreground-500 hover:text-primary transition-colors"
            >
              Skills
            </Button>
            <Button 
              variant="light" 
              onPress={() => scrollToSection('contact')} 
              className="text-foreground-500 hover:text-primary transition-colors"
            >
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}