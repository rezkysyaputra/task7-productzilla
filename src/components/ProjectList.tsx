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

export default ProjectCard;
