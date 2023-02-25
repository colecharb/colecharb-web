import './App.css';
import PortfolioItem from './components/PortfolioItem';
import portfolioItems from './data/portfolioItems';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Cole Charbonneau</h1>

        <p className='big-text'>
          Full-stack engineer and UX designer.
          Currently developing for iOS at <a className='poch' href='https://pocketchangeapp.ca' target='_blank'>
            <span className='poch'>PocketChange</span>
          </a>.
        </p>

      </div>

      <div className='portfolio'>

        <div className='line-horizontal' />
        <h2>Projects</h2>
        {/* <div className='line-horizontal' /> */}

        {portfolioItems.map(item => (
          <PortfolioItem title={item.title} subtitle={item.subtitle} description={item.description} />
        ))}

      </div>


    </div>
  );
}

export default App
