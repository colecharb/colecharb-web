import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
import HomePage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import PhotosPage from './pages/Photos';

type Tab = { title: string; path: string };

function App() {
  const { pathname } = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});
  const prevPath = useRef(pathname);

  // Continuously track scroll position for the active page
  useEffect(() => {
    const onScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Restore scroll position when switching pages (before paint to avoid flash)
  useLayoutEffect(() => {
    prevPath.current = pathname;
    window.scrollTo(0, scrollPositions.current[pathname] ?? 0);
  }, [pathname]);

  // Lock scroll on landing and contact pages (before paint to avoid flash)
  useLayoutEffect(() => {
    const noScroll = pathname === '/' || pathname === '/contact';
    document.body.style.overflow = noScroll ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [pathname]);

  // open external links in new tab/window
  window.addEventListener('DOMContentLoaded', function externalLinks() {
    const anchors = document.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].hostname !== window.location.hostname) {
        anchors[i].setAttribute('target', '_blank');
        anchors[i].setAttribute('rel', 'noopener');
      }
    }
  });

  const tabs: Tab[] = [
    // { title: "About", path: '/' },
    { title: 'Photos', path: '/photos' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  const pages = [
    { path: '/', element: <HomePage />, section: false },
    { path: '/photos', element: <PhotosPage />, section: true },
    { path: '/projects', element: <ProjectsPage />, section: true },
    { path: '/contact', element: <ContactPage />, section: false },
  ];

  return (
    <div className='App'>
      {/* <div className="line-horizontal" /> */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'var(--background)',
          zIndex: 10,
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            padding: '0.25em',
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
            gap: '1em',
          }}
        >
          <h2>
            <NavLink
              to='/'
              className='tab-button'
            >
              Cole Charbonneau
            </NavLink>
          </h2>

          <div style={{ flex: 1 }}>
            <div className='tab-bar'>
              {tabs.map((tab) => (
                <h2 key={tab.path}>
                  <NavLink
                    to={tab.path}
                    className='tab-button'
                  >
                    {tab.title}
                  </NavLink>
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className='line-horizontal' />
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: '5em' }} />

      {pages.map(({ path, element, section }) => {
        const active = pathname === path;
        const content = section ? <div className='section'>{element}</div> : element;
        return (
          <div
            key={path}
            className={`page-wrapper ${active ? 'page-active' : 'page-hidden'}`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default App;
