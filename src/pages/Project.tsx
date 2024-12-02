import React from 'react';
import ProjectCard from '../components/ProjectList';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Beli Galon RestFullAPI',
    description:
      'Beli Galon Backend is a backend application for an e-commerce system with features for selling gallons and other drinks.',
    technologies: [
      'Typescript',
      'Node.js',
      'MongoDB',
      'Express',
      'Payment-Gateway',
      'Swagger Docs',
      'Unit test',
    ],
    imageUrl: 'images/begal.png',
    githubUrl: 'https://github.com/rezkysyaputra/begal-backend',
  },
  {
    id: 2,
    title: 'Laundry Website',
    description:
      'A website to manage all the needs of a laundry owner, starting from transactions, products, expense reports and others.',
    technologies: ['PHP', 'MySQL'],
    imageUrl: 'images/laundry.png',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Library information system for students App Desktop',
    description:
      'Library information system for students desktop application can help manage book collections, monitor loans, and facilitate access to information for students.',
    technologies: ['C#', '.NET', 'MySQL'],
    imageUrl: '/images/library.png',
    githubUrl:
      'https://github.com/rezkysyaputra/FP-SISTEM-INFORMASI-PERPUSTAKAAN',
  },
];

const Projects: React.FC = () => {
  return (
    <section className=' dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl'>
            My Recent Projects
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
