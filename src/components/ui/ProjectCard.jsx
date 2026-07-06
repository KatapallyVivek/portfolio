import TechBadge from './TechBadge';
import Button from './Button';
import { classNames } from '../../utils/classNames';

export default function ProjectCard({ project, reverse = false }) {
  return (
    <div className={classNames(
      "group relative flex flex-col md:flex-row gap-8 lg:gap-16 items-center",
      reverse ? "md:flex-row-reverse" : ""
    )}>
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent z-10 pointer-events-none"></div>
        <div className="w-full h-full flex items-center justify-center bg-[#18181b] text-text-muted transition-transform duration-700 group-hover:scale-105">
           {project.image && project.image !== '' ? (
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
           ) : (
             <span className="text-xl font-medium opacity-30">{project.title} Preview</span>
           )}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-base leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map(t => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-auto">
          <Button variant="primary" href={project.liveLink} target="_blank" rel="noopener noreferrer">
            View Live
          </Button>
          <Button variant="secondary" href={project.sourceLink} target="_blank" rel="noopener noreferrer">
            Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}
