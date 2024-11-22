import { Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white shadow dark:bg-gray-900'>
      <div className='w-full max-w-screen-xl mx-auto p-6 md:py-8'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            © {currentYear} RezkyDev. All Rights Reserved.
          </span>
          <nav aria-label='Social media links'>
            <ul className='flex space-x-4'>
              <li>
                <Link
                  to='https://github.com/rezkysyaputra'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  aria-label='GitHub profile'
                >
                  <Github className='w-6 h-6' />
                </Link>
              </li>
              <li>
                <Link
                  to='https://instagram.com/rezky.s_'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  aria-label='Instagram profile'
                >
                  <Instagram className='w-6 h-6' />
                </Link>
              </li>
              <li>
                <Link
                  to='https://linkedin.com/in/Muh. Rezky Syaputra'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  aria-label='LinkedIn profile'
                >
                  <Linkedin className='w-6 h-6' />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
