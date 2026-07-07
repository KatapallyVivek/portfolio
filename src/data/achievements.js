import { FiAward, FiCode } from 'react-icons/fi';

export const achievements = [
  {
    id: 'innovation-day',
    badge: 'WINNER',
    title: 'Best Web Application',
    event: 'Innovation Day Hackathon',
    organization: 'Sree Dattha Group of Institutions',
    description: 'Awarded Best Web Application for developing Alertify, recognized for innovative design, responsive and clean UI, selected among 50+ participating teams.',
    icon: FiAward,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/20'
  },
  {
    id: 'ai-tools-event',
    badge: 'RUNNER-UP',
    title: 'Frontend Web Application',
    event: 'AI Tools Project Program',
    organization: 'Sree Dattha Group of Institutions  ',
    description: 'Developed a frontend web application using AI tools in a limited-time hackathon setting, achieving runner-up among 20+ teams.',
    icon: FiCode,
    color: 'text-zinc-300',
    bgColor: 'bg-zinc-300/10',
    borderColor: 'border-zinc-300/20'
  }
];
