import appProjects from '../data/appProjects';
import Project_App from '../components/Project_App';

export default function ProjectBytePair() {
  return (
    <Project_App
      hasImages={false}
      app={appProjects.BytePair}
    >
      Check out the demo{' '}
      <a
        href='https://byte-pair.vercel.app/'
        rel='noopener noreferrer'
        target='_blank'
      >
        here
      </a>
      !
    </Project_App>
  );
}
