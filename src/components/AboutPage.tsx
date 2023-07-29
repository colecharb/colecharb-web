export default function AboutPage() {
  return (
    <>
      <p className='big-text'>
        Full-stack engineer and UX designer. Currently developing web apps at{' '}
        <a
          className='employer'
          href='https://certusinnovations.com'
          target='_blank'
          rel='noreferrer'
        >
          <span className='poch'>Certus Innovations</span>
        </a>
        .
      </p>

      <p>
        Hi! I like making things. I'm a developer and designer with a background
        in pure math and an obsession with constantly learning and improving my
        skills. Developing intuitive and appealing user experiences is what I'm
        all about.
      </p>
      <p>
        Check out the projects tab for examples of my work and feel free to
        contact me if you're interested in working together. I'm always excited
        to take on new challenges.
      </p>
      <p>{'\u2013'} Cole</p>
    </>
  );
}
