import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';

type Tab = { title: string, path: string };

function App() {

  window.addEventListener("DOMContentLoaded", function externalLinks() {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].hostname !== window.location.hostname) {
        anchors[i].setAttribute("target", "_blank");
        anchors[i].setAttribute("rel", "noopener");
      }
    }
  });

  const tabs: Tab[] = [
    // { title: "About", path: '/' },
    { title: "Projects", path: '/projects' },
    { title: "Contact", path: '/contact' },
  ];

  return (
    <div className="App">

      {/* <div className="line-horizontal" /> */}

      <div style={{ display: 'flex', alignItems: 'center', padding: '0.25em', gap: '1em' }}>

        <h2>
          <NavLink
            to="/"
            className='tab-button'
          >
            Cole Charbonneau
          </NavLink>
        </h2>

        <div style={{ flex: 1 }}>

          <div className="tab-bar">
            {tabs.map((tab) => (
              <h2>
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

      <div className="line-horizontal" />

      <div className="section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App