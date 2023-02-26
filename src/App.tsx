import './App.css';
import PortfolioItem from './components/PortfolioItem';
import portfolioItems from './data/portfolioItems';

function App() {

  return (
    <div className="App">
      <div className='section'>
        <h1>Cole Charbonneau</h1>

        <p className='big-text'>
          Full-stack engineer and UX designer.
          Currently developing for iOS at <a className='poch' href='https://pocketchangeapp.ca' target='_blank'>
            <span className='poch'>PocketChange</span>
          </a>.
        </p>

      </div>

      {/* <div className='line-horizontal' />
      <p className=''>asdfasdf</p> */}

      <div className='line-horizontal' />
      <div className='section'>

        <h2>Projects</h2>
        {/* <div className='line-horizontal' /> */}

        {portfolioItems.map(item => (
          <PortfolioItem title={item.title} subtitle={item.subtitle} description={item.description} />
        ))}

      </div>


      <div className='line-horizontal' />
      <div className='section'>

        <h2>Contact</h2>

        <div className='contact-info'>
          <p>
            <a href='mailto:colecharb.dev@gmail.com' target='_blank'>
              colecharb.dev@gmail.com
            </a>
          </p>
          <p>
            <a href='tel:+14138541225'>
              +1 (413) 854-1225
            </a>
          </p>
          <p>
            <a href='https://www.linkedin.com/in/colecharbonneau/' target='_blank'>
              LinkedIn
            </a>
          </p>
        </div>

      </div>

    </div>
  );
}

export default App
