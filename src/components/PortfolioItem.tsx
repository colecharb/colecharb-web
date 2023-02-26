import '../App.css'
import { PortfolioItem } from '../types'

export default function (item: PortfolioItem) {

  const randomAngle = (n?: number) => {
    const angle = 4 * Math.random() + 1;
    const sign = (n == 1) ? (
      -1
    ) : (n == 2) ? (
      1
    ) : (
      (Math.random() < 0.5) ? -1 : 1
    )
    return sign * angle;
  }

  const randomShift = () => 1 * (2 * Math.random() - 1);

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
          return (
            <img
              src={`images/${item.title}/${n}-2.png`}
              className='screenshot'
              style={{
                rotate: `${randomAngle(n)}deg`,
                translate: `0px ${randomShift()}rem`,
              }}
            />
          )
        })}

        <div className='portfolio-description'>
          {item.description}
        </div>


      </div>
    </div>
  )
}