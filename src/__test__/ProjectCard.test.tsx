import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ProjectCard from '../components/ProjectList';

const mockProject = {
  id: 1,
  title: 'Test Project',
  description: 'This is a test project.',
  technologies: ['React', 'TypeScript', 'CSS'],
  imageUrl: 'https://via.placeholder.com/150',
  githubUrl: 'https://github.com/test-project',
};

describe('ProjectCard Component', () => {
  test('renders project details correctly', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', { name: /test project/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/this is a test project/i)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /screenshot of test project/i })
    ).toHaveAttribute('src', mockProject.imageUrl);
  });

  test('renders technologies used', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    mockProject.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  test('renders GitHub link correctly', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link', { name: /view code/i });
    expect(linkElement).toHaveAttribute('href', mockProject.githubUrl);
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
});
