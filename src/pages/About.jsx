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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">About</h1>
              
              <div className="prose prose-invert prose-lg max-w-none text-[#a1a1aa] leading-relaxed">
                <p className="mb-8">
                  I'm a software engineer who genuinely enjoys the process of building products. 
                  My engineering journey started with writing simple automation scripts, but it quickly evolved 
                  into a deep fascination with how large-scale systems are architected and deployed.
                </p>
                
                <p className="mb-8">
                  Today, I focus heavily on full-stack development. I enjoy working across the entire stack—from 
                  optimizing database queries on the backend to polishing interactive micro-animations on the frontend. 
                  To me, great software is the result of both rigorous problem solving and a keen eye for design.
                </p>
                
                <p className="mb-8">
                  My core philosophy is centered around clean architecture. I believe that writing code is easy, but 
                  writing maintainable, scalable, and self-documenting code requires discipline. I prefer simplicity 
                  over cleverness. If a complex problem can be solved with a simple, elegant abstraction, I consider 
                  that a win.
                </p>

                <p className="mb-8">
                  I maintain a strong learning mindset. Technology evolves rapidly, and while I specialize in modern 
                  tools like React and Node.js, I treat frameworks simply as tools to achieve a goal. The real craft 
                  lies in understanding core computer science fundamentals, network protocols, and distributed systems.
                </p>
                
                <p>
                  Ultimately, my goal is to build software that not only functions flawlessly but also feels 
                  delightful to use. I build for the user, but I engineer for the future.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageTransition>
  );
}
