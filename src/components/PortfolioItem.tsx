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

        {[1, 2, 3].map(n => (
          <img src={`images/${item.title}/${n}.PNG`} className='screenshot' />
        ))}

        <div className='portfolio-description'>
          {item.description}
        </div>

      </div>
    </div>
  )
}