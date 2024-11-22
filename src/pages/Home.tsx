import { File, Code } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className='bg-white dark:bg-gray-900 min-h-screen'>
      <main className='max-w-6xl mx-auto px-4 py-16'>
        <section className='mb-16 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <h2 className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
              Hi There! 👋
            </h2>
            <h1 className='text-5xl font-extrabold text-gray-800 dark:text-white mb-4'>
              I'M Muh.Rezky Syaputra
            </h1>
            <h2 className='text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6'>
              Fullstack Web Developer
            </h2>
            <Link
              to='#'
              className='inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300'
            >
              <File className='w-5 h-5' />
              <span>Resume</span>
            </Link>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img
              src='images/Design inspiration-bro.png'
              alt='Design Inspiration'
              className='w-full max-w-md h-auto rounded-lg shadow-lg'
            />
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white'>
            About Me
          </h2>
          <div className='text-gray-600 dark:text-gray-300 space-y-4'>
            <p>
              Hello! I'm Muh.Rezky Syaputra, a passionate Fullstack Web
              Developer based in Sulawesi Tenggara, Indonesia.
            </p>
            <p>
              I'm currently pursuing my education at Universitas Amikom
              Yogyakarta, where I'm honing my skills in web development and
              exploring the latest technologies in the field.
            </p>
            <p>
              With a strong foundation in both front-end and back-end
              technologies, I strive to create seamless, user-friendly web
              applications that make a difference.
            </p>
          </div>
        </section>

        <section>
          <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white'>
            Skills
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {[
              'JavaScript',
              'React JS',
              'Node.js',
              'Express JS',
              'Tailwind CSS',
              'Git',
              'Swagger Docs',
              'Unit test',
              'PHP',
              'TypeScript',
              'PostgreSQL',
              'MongoDB',
            ].map((skill) => (
              <div
                key={skill}
                className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center space-x-2'
              >
                <Code className='text-blue-600 dark:text-blue-400 w-5 h-5' />
                <span className='text-gray-800 dark:text-white'>{skill}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
