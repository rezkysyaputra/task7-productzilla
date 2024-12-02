import { Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';
import LinkMediaSocial from './LinkSocialMedia';

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
                <LinkMediaSocial to={'https://github.com/rezkysyaputra'}>
                  <Github className='w-6 h-6' />
                </LinkMediaSocial>
              </li>
              <li>
                <LinkMediaSocial to={'https://instagram.com/rezky.s_'}>
                  <Instagram className='w-6 h-6' />
                </LinkMediaSocial>
              </li>
              <li>
                <LinkMediaSocial
                  to={
                    'https://www.linkedin.com/in/muh-rezky-syaputra-a65a42250'
                  }
                >
                  <Linkedin className='w-6 h-6' />
                </LinkMediaSocial>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
