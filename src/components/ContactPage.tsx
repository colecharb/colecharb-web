import { FaLinkedin } from 'react-icons/fa';
import { GiEnvelope } from 'react-icons/gi';
import { GoGitBranch, GoGitPullRequest } from 'react-icons/go';

export default function ContactPage() {
  return (
    <div>
      <div className='contact-item'>
        <GoGitBranch className='contact-icon' />
        <a href='https://github.com/colecharb'>Personal GitHub</a>
      </div>

      <div className='contact-item'>
        <GoGitPullRequest className='contact-icon' />
        <a href='https://github.com/colecharbonneau'>Work GitHub</a>
      </div>

      <div className='contact-item'>
        <FaLinkedin className='contact-icon' />
        <a href='https://www.linkedin.com/in/colecharbonneau/'>LinkedIn</a>
      </div>

      <div className='contact-item'>
        <GiEnvelope className='contact-icon' />
        <a href='mailto:colecharb.dev@gmail.com'>colecharb.dev@gmail.com</a>
      </div>
    </div>
  );
}
