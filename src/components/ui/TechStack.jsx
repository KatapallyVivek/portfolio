import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import SectionTitle from './SectionTitle';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiJavascript, SiTypescript, SiTailwindcss, 
  SiGit, SiGithub, SiDocker, SiFirebase, 
  SiLinux, SiPostman, SiC, SiPython, SiHtml5, SiCss, SiMysql,
  SiVercel, SiRender, SiGithubactions
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa';

const techGroups = [
  {
    category: "Languages",
    items: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
    ]
  }
];

const TechItem = ({ tech }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 cursor-pointer min-w-[60px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="relative">
        <tech.icon 
          className="text-[28px] transition-colors duration-300"
          style={{ color: isHovered ? tech.color : '#52525b' }} // zinc-600 by default for minimal dark look
        />
        <div 
          className="absolute inset-0 blur-xl transition-opacity duration-300 rounded-full pointer-events-none"
          style={{ backgroundColor: tech.color, opacity: isHovered ? 0.25 : 0 }}
        />
      </div>
      <span 
        className="text-[10px] font-medium tracking-wide transition-colors duration-300"
        style={{ color: isHovered ? '#e4e4e7' : '#71717a' }} // zinc-200 on hover, zinc-500 default
      >
        {tech.name}
      </span>
    </motion.div>
  );
};

export default function TechStack() {
  return (
    <section className="py-12 md:py-16 border-t border-white/5 relative z-10">
      <Container>
        <SectionTitle 
          title="Tech Stack" 
          subtitle="A minimal, curated list of tools I use to build software."
        />
        
        <div className="mt-8 flex flex-col gap-8 md:gap-10">
          {techGroups.map((group, groupIdx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              {/* Category Label */}
              <h3 className="text-[#52525b] text-xs font-semibold tracking-[0.2em] uppercase w-28 shrink-0 md:text-right">
                {group.category}
              </h3>
              
              {/* Tech Logos */}
              <div className="flex flex-wrap gap-5 md:gap-6">
                {group.items.map((tech) => (
                  <TechItem key={tech.name} tech={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
