import { GiRotaryPhone, GiEnvelope } from 'react-icons/gi';
import { FaLinkedin } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';

export default function () {
  return (
    <div className='contact-info'>
      <div className='contact-item'>
        <GiEnvelope className='contact-icon' />
        <a href='mailto:colecharb.dev@gmail.com' target='_blank' rel="noopener noreferrer">
          colecharb.dev@gmail.com
        </a>
      </div>

      <div className='contact-item'>
        <GiRotaryPhone className='contact-icon' />
        <a href='tel:+14138541225'>+1 (413) 854-1225</a>
      </div>

      <div className='contact-item'>
        <FaLinkedin className='contact-icon' />
        <a href='https://www.linkedin.com/in/colecharbonneau/' target='_blank' rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

    </div>
    // <div className='business-card'>
    //   Cole Charbonneau
    // </div>
  )
}