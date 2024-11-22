import React from 'react';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
    <img
      src={project.imageUrl}
      alt={`Screenshot of ${project.title}`}
      className='w-full h-48 object-cover'
    />
    <div className='p-6'>
      <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
        {project.title}
      </h3>
      <p className='text-gray-600 dark:text-gray-400 mb-4'>
        {project.description}
      </p>
      <div className='flex flex-wrap gap-2 mb-4' aria-label='Technologies used'>
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className='px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm'
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-end mt-4'>
        <Link
          to={project.githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          aria-label={`View code for ${project.title} on GitHub`}
        >
          <Github size={20} />
          <span>View Code</span>
        </Link>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8'>
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
