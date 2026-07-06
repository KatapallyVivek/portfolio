import Container from '../components/layout/Container';
import PageTransition from '../components/layout/PageTransition';
import AnimatedSection from '../components/layout/AnimatedSection';
import GridBackground from '../components/ui/GridBackground';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import TechBadge from '../components/ui/TechBadge';
import { projects } from '../data/projects';
import { principles } from '../data/principles';
import { technologies } from '../data/tech';

export default function Home() {
  const featuredProject = projects[0];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center pb-20">
        <GridBackground />
        <Container>
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                Vivek Katapally
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary font-medium mb-4">
                Full Stack Developer
              </p>
              <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-12">
                Building thoughtful software with modern web technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button href="/projects">View Projects</Button>
                <Button variant="secondary" href="/contact">Reach Out</Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Principles Section */}
      <section className="py-24 md:py-32 bg-surface/30">
        <Container>
          <AnimatedSection>
            <SectionTitle 
              title="Engineering Principles" 
              subtitle="The core values that guide my approach to software development."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {principles.map((principle, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-text-primary mb-4">{principle.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Featured Project */}
      <section className="py-24 md:py-32">
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

      {/* Technologies Section */}
      <section className="py-24 md:py-32 bg-surface/30">
        <Container>
          <AnimatedSection>
            <SectionTitle 
              title="Technologies" 
              subtitle="The tools I use to bring ideas to life."
            />
            
            <div className="flex flex-wrap gap-3 mt-12">
              {technologies.map(tech => (
                <div key={tech} className="px-6 py-3 rounded-xl border border-white/5 bg-white/5 text-text-primary text-sm font-medium hover:border-white/20 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageTransition>
  );
}
