import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ContactInfo from "./components/ContactInfo";
import Projects from "./components/Projects";

type Tab = { title: string, path: string };

export default function () {

  const tabs: Tab[] = [
    { title: "About", path: '/' },
    { title: "Portfolio", path: '/portfolio' },
    { title: "Contact", path: '/contact' },
  ];


  return (

    <BrowserRouter>

      <div className="line-horizontal" />

      <div className="tab-bar">
        {tabs.map((tab, index) => (
          <h2>
            <NavLink
              to={tab.path}
              className={({ isActive, isPending }) =>
                `tab-button ${isActive ? 'active' : ''}`
              }
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
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
      </div>

    </BrowserRouter>

  )
}