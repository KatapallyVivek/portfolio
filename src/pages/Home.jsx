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
import { technologies } from '../data/tech';
import { motion } from 'framer-motion';
import EducationSection from '../components/ui/EducationSection';

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 perspective-1000">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 30, rotateX: 15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15, type: 'spring', bounce: 0.4 }}
                    whileHover={{ scale: 1.02, rotateY: idx === 0 ? 3 : -3, zIndex: 10 }}
                    key={achievement.id} 
                    className="relative group h-full"
                  >
                    {/* Animated Aura Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                    
                    <div className="relative h-full p-6 md:p-8 rounded-3xl border border-white/10 bg-[#111113]/90 backdrop-blur-2xl shadow-xl overflow-hidden flex flex-col justify-between">
                      
                      {/* Decorative Background Element */}
                      <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <motion.div 
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx }}
                            className={`w-12 h-12 rounded-xl ${achievement.bgColor} flex items-center justify-center border ${achievement.borderColor} shadow-inner`}
                          >
                            <Icon className={`text-2xl ${achievement.color}`} />
                          </motion.div>
                          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${achievement.borderColor} ${achievement.color} bg-black/50 backdrop-blur-md`}>
                            {achievement.badge}
                          </span>
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                          {achievement.title}
                        </h3>
                        
                        <div className="font-mono text-xs text-blue-400/80 mb-5 flex flex-wrap items-center gap-2">
                          <span>{achievement.event}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span className="text-white/40">{achievement.organization}</span>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed text-sm relative z-10 mt-auto">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <EducationSection />

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
