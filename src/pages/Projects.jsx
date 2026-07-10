import Container from '../components/layout/Container';
import PageTransition from '../components/layout/PageTransition';
import AnimatedSection from '../components/layout/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <PageTransition>
      <section className="pt-12 pb-24 md:pt-16 md:pb-32">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mb-24">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Work</h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                A curated collection of projects that blend clean architecture, scalable engineering, and thoughtful design to deliver fast, reliable, and engaging user experiences.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-32">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id}>
                <ProjectCard 
                  project={project} 
                  reverse={index % 2 !== 0} 
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
