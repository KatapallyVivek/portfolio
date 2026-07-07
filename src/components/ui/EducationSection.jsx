import { motion } from 'framer-motion';
import { education } from '../../data/education';
import Container from '../layout/Container';
import AnimatedSection from '../layout/AnimatedSection';
import DeveloperDesk from './DeveloperDesk';


export default function EducationSection() {
  return (
    <section className="py-12 md:py-16 border-t border-white/5 relative bg-[#09090b]">
      <Container>
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Education List */}
            <div>
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-light tracking-tight text-white mb-2">
                  Education
                </h2>
                <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
                  Academic History
                </p>
              </div>
              
              <div className="group/list relative border-b border-white/10">
                {education.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group border-t border-white/10 py-5 transition-opacity duration-300 hover:!opacity-100 group-hover/list:opacity-40"
                  >
                    <div className="flex flex-col gap-1">
                      {/* Top Row: Degree & Score */}
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-lg md:text-xl font-medium text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                          {item.degree}
                        </h3>
                        <div className="text-right flex-shrink-0">
                          <span className="font-mono text-white text-sm md:text-base">{item.score}</span>
                          <span className="font-mono text-white/40 text-xs md:text-sm">/{item.scoreMax}</span>
                        </div>
                      </div>
                      
                      {/* Bottom Row: Institution & Year */}
                      <div className="flex justify-between items-baseline gap-4 mt-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-text-secondary">
                          <span>{item.institution}</span>
                          {item.stream && (
                            <>
                              <span className="text-white/20">•</span>
                              <span className="text-white/60">{item.stream}</span>
                            </>
                          )}
                        </div>
                        <span className="font-mono text-xs text-text-muted flex-shrink-0">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Developer Desk Animation */}
            <div className="hidden md:block">
               <DeveloperDesk />
            </div>

          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
