import Container from '../components/layout/Container';
import PageTransition from '../components/layout/PageTransition';
import AnimatedSection from '../components/layout/AnimatedSection';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';

const contactLinks = [
  { name: 'GitHub', url: '#', icon: FiGithub },
  { name: 'LinkedIn', url: '#', icon: FiLinkedin },
  { name: 'X', url: '#', icon: RiTwitterXFill },
  { name: 'Email', url: 'mailto:#', icon: FiMail },
];

export default function Contact() {
  return (
    <PageTransition>
      <section className="py-24 md:py-32 min-h-[calc(100vh-6rem)] flex items-center">
        <Container className="w-full">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Let's build something <br className="hidden md:block" />
                meaningful.
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-[#111113] hover:bg-[#18181b] hover:border-white/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="text-xl text-text-secondary group-hover:text-white transition-colors" />
                        <span className="text-lg font-medium text-text-primary group-hover:text-white transition-colors">{link.name}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                        <FiArrowUpRight className="text-text-muted group-hover:text-white transition-colors" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </PageTransition>
  );
}
