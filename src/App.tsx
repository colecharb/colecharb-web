import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

import PhotosPage from './pages/PhotosPage';

type Tab = { title: string; path: string };

function App() {
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

  return (
    <div className='App'>
      {/* <div className="line-horizontal" /> */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'var(--background)',
          zIndex: 10,
          marginLeft: 'calc(-0.7 * var(--margin))',
          marginRight: 'calc(-0.7 * var(--margin))',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
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

      <div className='section'>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/projects'
            element={<ProjectsPage />}
          />
          <Route
            path='/photos'
            element={<PhotosPage />}
          />
          <Route
            path='/contact'
            element={<ContactPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
