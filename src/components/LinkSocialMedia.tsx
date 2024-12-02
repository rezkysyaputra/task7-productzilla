import { Link } from 'react-router-dom';

interface LinkMediaSocialProps {
  to: string;
  children: React.ReactNode;
}
const LinkMediaSocial: React.FC<LinkMediaSocialProps> = ({
  to,
  children,
}: LinkMediaSocialProps) => {
  return (
    <Link
      to={to}
      target='_blank'
      rel='noopener noreferrer'
      className='text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
      aria-label='GitHub profile'
    >
      {children}
    </Link>
  );
};

export default LinkMediaSocial;
