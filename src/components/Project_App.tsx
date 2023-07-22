import { ReactNode } from 'react';
import '../App.css';
import { App } from '../types';

export default function Project_App({
  app,
  children,
}: {
  app: App;
  children?: ReactNode;
}) {
  const randomAngle = (n?: number) => {
    const angle = 4 * Math.random() + 1;
    const sign = n == 1 ? -1 : n == 2 ? 1 : Math.random() < 0.5 ? -1 : 1;
    return sign * angle;
  };

  const randomShift = () => 1 * (2 * Math.random() - 1);

  return (
    <div>
      <h3 className='big-text'>
        {app.title}
        {/* <span className='portfolio-item-title subtitle'>
          {' ' + app.subtitle}
        </span> */}
      </h3>

      <div className='portfolio-item-content-container'>
        {[1, 2, 3].map((n) => {
          return (
            <img
              key={n}
              src={`images/${app.title}/${n}.png`}
              className='screenshot'
              style={{
                rotate: `${randomAngle(n)}deg`,
                translate: `0px ${randomShift()}rem`,
              }}
            />
          );
        })}

        <div className='portfolio-item-abstract'>{app.abstract}</div>
      </div>

      {children ?? null}
    </div>
  );
}
