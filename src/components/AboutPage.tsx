import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <p className="big-text">
        Full-stack engineer and UX designer. Currently developing web apps for{" "}
        <a
          className="employer"
          href="https://certusinnovations.com"
          target="_blank"
        >
          <span className="poch">Certus Innovations</span>
        </a>
        .
      </p>

      <p>
        Hi! I like making things. I'm a developer and designer with a background
        in pure mathematics and an obsession with constantly learning and
        improving my skills. Developing intuitive and appealing user experiences
        is what I'm all about.
      </p>
      <p>
        Check out the projects tab for examples of my work and feel free to
        contact me if you're interested in working together. I'm always excited
        to take on new challenges.
      </p>
      <p>{"\u2013"} Cole</p>
    </>
  );
}