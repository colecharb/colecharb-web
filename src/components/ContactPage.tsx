import { FaLinkedin } from "react-icons/fa";
import { GiEnvelope, GiRotaryPhone } from "react-icons/gi";
import { GoGitBranch } from "react-icons/go";

export default function () {
  return (
    <div>
      <div className="contact-item">
        <GoGitBranch className="contact-icon" />
        <a href="https://github.com/colecharb">GitHub</a>
      </div>

      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a href="https://www.linkedin.com/in/colecharbonneau/">LinkedIn</a>
      </div>

      <div className="contact-item">
        <GiEnvelope className="contact-icon" />
        <a href="mailto:colecharb.dev@gmail.com">colecharb.dev@gmail.com</a>
      </div>

      <div className="contact-item">
        <GiRotaryPhone className="contact-icon" />
        <a href="tel:+14138541225">+1 (413) 854-1225</a>
      </div>
    </div>
  );
}