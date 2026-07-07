import TechBadge from './TechBadge';
import Button from './Button';
import { classNames } from '../../utils/classNames';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, reverse = false }) {
  return (
    <div className={classNames(
      "group relative flex flex-col md:flex-row gap-8 lg:gap-16 items-center",
      reverse ? "md:flex-row-reverse" : ""
    )}>
      {/* Image (40%) */}
      <div className="w-full md:w-[40%] rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent z-10 pointer-events-none"></div>
        {project.id === 'countro' ? (
          <div className="w-full h-full flex items-center justify-center bg-[#09090b] text-text-muted p-4 md:p-6 relative perspective-1000">
            {/* Ambient Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[200px] h-[200px] bg-blue-500/10 blur-[80px] rounded-full"></div>
            </div>

            <motion.div 
              animate={{ y: [-4, 4, -4], rotateX: [1, -1, 1], rotateY: [-1, 1, -1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full max-h-[300px] rounded-xl border border-white/10 bg-[#0c0c0e] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative z-10"
            >
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.06] pointer-events-none"></div>
              
              {/* Mac Terminal Header */}
              <div className="px-4 py-2.5 bg-[#1a1a1d] flex items-center gap-2 border-b border-white/5 relative z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm"></div>
                </div>
                <div className="flex-1 text-center pr-8 text-[11px] font-medium text-white/40 font-sans tracking-wide">
                  node - countro
                </div>
              </div>
              
              <div className="p-4 md:p-5 text-xs font-mono text-text-secondary space-y-1.5 flex-grow overflow-hidden relative z-10">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <span className="text-green-400 font-bold">➜</span> <span className="text-blue-400 font-bold">~</span> countro create-file sample.txt
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.3 }} className="text-white/80 pb-2">
                  ✨ file sample.txt created
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.5 }}>
                  <span className="text-green-400 font-bold">➜</span> <span className="text-blue-400 font-bold">~</span> countro list
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7, duration: 0.5 }} className="text-text-muted leading-[1.5] pl-2 pt-1">
                  <p>├── src/</p>
                  <p>│   ├── index.js</p>
                  <p>│   └── utils.js</p>
                  <p>├── sample.txt</p>
                  <p>└── package.json</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ delay: 3.5, repeat: Infinity, duration: 0.8 }} 
                  className="w-2 h-3.5 bg-white/50 mt-3 inline-block"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#18181b] text-text-muted transition-transform duration-700 group-hover:scale-[1.02]">
             {project.image && project.image !== '' ? (
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             ) : (
               <span className="text-xl font-medium opacity-30">{project.title} Preview</span>
             )}
          </div>
        )}
      </div>

      {/* Content (60%) */}
      <div className="w-full md:w-[60%] flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-base leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map(t => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <Button variant="primary" href={project.liveLink} target="_blank" rel="noopener noreferrer" showArrow>
            View Live
          </Button>
          <a 
            href={project.sourceLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-300"
            aria-label="View Source Code"
          >
            <FiGithub className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
