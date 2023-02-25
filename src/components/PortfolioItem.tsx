import '../App.css'
import { PortfolioItem } from '../types'

export default function (item: PortfolioItem) {

  return (
    <>
      <h3 className='portfolio-item-title'>
        {item.title}
        {/* <span className='portfolio-item-title subtitle'>
          {' ' + item.subtitle}
        </span> */}
      </h3>
      <div className="portfolio-item">

        <div className="portfolio-column left">
          <div className='image-container'>
            {[1, 2, 3].map(n => (
              <img src={`images/${item.title}/${n}.PNG`} width='30%' />
            ))}
          </div>

        </div>

        <div className="portfolio-column right">
          <div className='portfolio-description'>
            {item.description}
          </div>
        </div>
      </div>
    </>
  )
}