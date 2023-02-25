import '../App.css'
import { PortfolioItem } from '../types'

export default function (item: PortfolioItem) {

  return (
    <div className='portfolio-item'>

      <h3 className='portfolio-item-title'>
        {item.title}
        {/* <span className='portfolio-item-title subtitle'>
          {' ' + item.subtitle}
        </span> */}
      </h3>

      <div className="portfolio-item-container">

        {[1, 2, 3].map(n => {
          const randomVal = (3 * Math.random());
          const sign = n % 2 === 0 ? 1 : -1;
          const rando = sign * randomVal;
          return (
            <img src={`images/${item.title}/${n}-2.png`} className='screenshot' style={{ transform: `rotate(${rando}deg)` }} />
          )
        })}

        <div className='portfolio-description'>
          {item.description}
        </div>

      </div>
    </div>
  )
}