import Container from '../components/layout/Container';
import PageTransition from '../components/layout/PageTransition';
import AnimatedSection from '../components/layout/AnimatedSection';

export default function About() {
  return (
    <PageTransition>
      <section className="py-24 md:py-32">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-16">About</h1>
              
              <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                <p className="mb-8">
                  I'm a software engineer who loves building products. I started my journey writing simple 
                  scripts and quickly realized the power of software to solve real-world problems. Today, I focus 
                  on full-stack development, creating applications that are fast, accessible, and beautiful.
                </p>
                
                <p className="mb-8">
                  My approach to engineering is rooted in simplicity. I believe that the best code is the code you 
                  don't have to write. When I do write code, I strive for clarity over cleverness, ensuring that 
                  the architecture is maintainable and scalable.
                </p>
                
                <p className="mb-8">
                  I enjoy the entire product lifecycle—from the initial wireframes to database design, API 
                  architecture, and frontend polish. It's this holistic view that allows me to build features 
                  that truly matter to users.
                </p>

                <p className="mb-8">
                  I primarily work with React, Node.js, and SQL/NoSQL databases. However, I consider myself 
                  technology agnostic. A framework is just a tool; the real craft is in understanding the underlying 
                  principles of computer science, performance optimization, and good design.
                </p>
                
                <p>
                  I'm constantly learning. Whether it's deep diving into data structures, exploring new rendering 
                  patterns, or refining my UI/UX skills, I believe that a great engineer is always a student.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageTransition>
  );
}
