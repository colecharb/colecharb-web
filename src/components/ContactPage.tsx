import type { IconType } from 'react-icons';
import { FaLinkedin } from 'react-icons/fa';
import { GiEnvelope } from 'react-icons/gi';
import { GoGitBranch, GoGitPullRequest } from 'react-icons/go';

interface ContactItem {
  Icon: IconType;
  title: string;
  href: string;
}
const CONTACT_ITEMS: readonly ContactItem[] = [
  {
    Icon: GoGitBranch,
    title: 'GitHub',
    href: 'https://github.com/colecharb',
  },
  // {
  //   Icon: GoGitPullRequest,
  //   title: 'Work GitHub',
  //   href: 'https://github.com/colecharbonneau',
  // },
  {
    Icon: FaLinkedin,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/colecharbonneau',
  },
  {
    Icon: GiEnvelope,
    title: 'colecharb.dev@gmail.com',
    href: 'mailto:colecharb.dev@gmail.com',
  },
] as const;

export default function ContactPage() {
  const randomAngle = (n: number) => {
    const angle = 4 * Math.random() + 1;
    const sign = n % 2 ? -1 : 1;
    return sign * angle;
  };

  const randomShift = (n: number) => (n % 2 ? 1 : -1) * (4 * Math.random());

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
      }}
    >
      {CONTACT_ITEMS.map((item, i) => (
        <div
          key={item.title}
          className='contact-item'
          style={{
            rotate: `${randomAngle(i)}deg`,
            translate: `${randomShift(i)}rem 0px`,
          }}
        >
          <item.Icon className='contact-icon' />
          <a
            href={item.href}
            rel='noreferrer'
          >
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
}
