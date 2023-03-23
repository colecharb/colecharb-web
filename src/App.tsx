import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Portfolio from './components/ProjectsPage';

type Tab = { title: string, path: string };

function App() {

  const tabs: Tab[] = [
    // { title: "About", path: '/' },
    { title: "Portfolio", path: '/portfolio' },
    { title: "Contact", path: '/contact' },
  ];

  return (
    <div className="App">

      <div className="line-horizontal" />

      <div style={{ display: 'flex', alignItems: 'center', padding: '0.25em', gap: '1em' }}>

        <h2>
          <NavLink
            to="/"
            className='tab-button'
          >
            Cole Charbonneau
          </NavLink>
        </h2>

        {/* <span style={{ fontSize: '1.2em', lineHeight: '120%' }}>
          Cole Charbonneau
        </span> */}

        <div style={{ flex: 1 }}>

          <div className="tab-bar">
            {tabs.map((tab, index) => (
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
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
      </div>

    </div>
  );
}

export default App