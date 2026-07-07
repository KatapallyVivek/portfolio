import Container from '../components/layout/Container';
import PageTransition from '../components/layout/PageTransition';
import AnimatedSection from '../components/layout/AnimatedSection';
import GridBackground from '../components/ui/GridBackground';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import TechBadge from '../components/ui/TechBadge';
import HeroWorkspace from '../components/ui/HeroWorkspace';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';
import { education } from '../data/education';
import { technologies } from '../data/tech';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProject = projects[0];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
        <GridBackground />
        <Container className="w-full relative z-10 flex">
          <div className="flex flex-col lg:flex-row items-stretch w-full gap-12 lg:gap-8">
            
            {/* Left Column (45%) */}
            <div className="w-full lg:w-[45%] flex flex-col justify-start pt-0 mt-0 lg:pt-8 lg:mt-0">
              <AnimatedSection>
                <div className="max-w-2xl">
                  {/* Premium Silver Text Effect */}
                  <h1 className="text-[34px] md:text-[42px] lg:text-[56px] xl:text-[64px] font-bold tracking-tight mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f4f4f5] to-[#a1a1aa] drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    Vivek Katapally
                  </h1>
                  
                  <p className="text-[18px] lg:text-[20px] text-[#e4e4e7] font-medium mb-4 tracking-wide">
                    Full Stack Developer
                  </p>
                  
                  <p className="text-[16px] lg:text-[18px] text-text-muted leading-relaxed mb-10 max-w-lg">
                    Building thoughtful software with modern web technologies. Focus on clean architecture and exceptional user experience.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button href="/projects" showArrow>View Projects</Button>
                    <Button variant="secondary" href="/contact">Reach Out</Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column (55%) */}
            <div className="w-full lg:w-[55%] hidden md:flex flex-col justify-center">
              <HeroWorkspace />
            </div>

          </div>
        </Container>
      </section>

      {/* Featured Project */}
      <section className="py-24 md:py-32 bg-surface/30 border-t border-white/5">
        <Container>
          <AnimatedSection>
            <SectionTitle 
              title="Featured Work" 
              subtitle="A look at my most recent product build."
            />
            
            <div className="mt-16">
              <ProjectCard project={featuredProject} />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <Container>
          <AnimatedSection>
            <SectionTitle 
              title="Achievements" 
              subtitle="Highlights from my engineering journey."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    key={achievement.id} 
                    className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                    <div className="flex items-start gap-5 relative z-10">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors shadow-lg">
                        <Icon className="text-xl text-text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-white transition-colors">{achievement.title}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Education Section */}
      <section className="py-24 md:py-32 bg-surface/30 border-t border-white/5">
        <Container>
          <AnimatedSection>
            <SectionTitle 
              title="Education" 
            />
            
            <div className="mt-16 max-w-3xl">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 md:pl-0 border-l border-white/10 md:border-l-0">
                  <div className="hidden md:block absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-[#09090b]"></div>
                  
                  <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative">
                    <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8 md:border-r md:border-white/10">
                      <span className="text-sm font-medium text-text-secondary px-3 py-1 bg-white/5 rounded-full border border-white/5 inline-block mb-2 md:mb-0">
                        {edu.year}
                      </span>
                    </div>
                    
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-text-primary mb-1">{edu.degree} in {edu.major}</h3>
                      <p className="text-text-secondary font-medium mb-3">{edu.college} <span className="text-text-muted mx-2">•</span> CGPA: {edu.cgpa}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.coursework.map(course => (
                          <span key={course} className="text-xs text-text-muted px-2 py-1 rounded-md bg-white/5 border border-white/5">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <Container>
          <AnimatedSection>
            <SectionTitle 
              title="Tech Stack" 
              subtitle="The tools and technologies I use to build scalable products."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {Object.entries(technologies).map(([category, techList], idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  key={category} 
                  className="relative p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techList.map(tech => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageTransition>
  );
}
