import './App.css';
import About from './components/About';
import ContactInfo from './components/ContactInfo';
import Projects from './components/Projects';
import TabThingy from './components/TabThingy';

function App() {

  return (
    <div className="App">
      <h1>Cole Charbonneau</h1>

      <TabThingy
        tabs={[
          { title: "Portfolio", component: <Projects /> },
          { title: "About", component: <About /> },
          { title: "Contact", component: <ContactInfo /> },
        ]}
        initialTab={1}
      />

      {/* <div className='line-horizontal' />
      <About />

      <div className='line-horizontal' />
      <Projects />

      <div className='line-horizontal' />
      <ContactInfo /> */}

    </div>
  );
}

export default App
