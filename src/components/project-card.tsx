import React from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div variants={item}>
      <Card
      isPressable
      onPress={() => window.open(project.link, "_blank")}
      className="overflow-hidden h-full cursor-pointer"
      shadow="sm"
      >
        <CardBody className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-foreground-500 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <Chip key={index} size="sm" variant="flat" color="primary">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between">
          <Button 
            color="primary" 
            variant="light" 
            endContent={<Icon icon="lucide:external-link" width={16} />}
            onClick={() => window.open(project.link, "_blank")}
          >
            View Project
          </Button>
          <Button 
            isIconOnly 
            variant="flat" 
            aria-label="GitHub Repository"
          >
            <Icon icon="lucide:github" width={18} />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};