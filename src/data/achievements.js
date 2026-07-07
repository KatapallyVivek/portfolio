import { FiAward, FiGithub, FiTerminal, FiDatabase } from 'react-icons/fi';

export const achievements = [
  {
    id: 'leetcode',
    title: 'LeetCode Problem Solver',
    description: 'Consistently solving complex algorithmic challenges and optimizing data structures.',
    icon: FiTerminal,
  },
  {
    id: 'github',
    title: 'Open Source Contributor',
    description: 'Active contributor to various open-source projects, improving code quality and fixing bugs.',
    icon: FiGithub,
  },
  {
    id: 'hackathon',
    title: 'Hackathon Winner',
    description: 'Built scalable prototypes under extreme time constraints.',
    icon: FiAward,
  },
  {
    id: 'npm',
    title: 'npm Package Creator',
    description: 'Published utility libraries focusing on developer experience and bundle optimization.',
    icon: FiDatabase,
  }
];
