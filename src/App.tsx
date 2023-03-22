import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Portfolio from './components/Portfolio';

type Tab = { title: string, path: string };

function App() {

  const tabs: Tab[] = [
    { title: "About", path: '/' },
    { title: "Portfolio", path: '/portfolio' },
    { title: "Contact", path: '/contact' },
  ];

  return (
    <div className="App">

      <div className="line-horizontal" />

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