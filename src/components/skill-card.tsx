import React from "react";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Skill {
  id: number;
  name: string;
  icon: string;
  proficiency: number;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
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
      <Card className="h-full" shadow="sm">
        <CardBody className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Icon icon={skill.icon} width={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
          <p className="text-foreground-500 mb-6">{skill.description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground-500">Proficiency</span>
              <span className="text-sm font-medium">{skill.proficiency}%</span>
            </div>
            <Progress 
              value={skill.proficiency} 
              color="primary" 
              className="h-2"
              aria-label={`${skill.name} proficiency: ${skill.proficiency}%`}
            />
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};