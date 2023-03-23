import { FaLinkedin } from "react-icons/fa";
import { GiEnvelope, GiRotaryPhone } from "react-icons/gi";

export default function () {
  return (
    <div>
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
  )
}