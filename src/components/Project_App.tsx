import { ReactNode } from 'react';
import '../App.css';
import type { App } from '../data/appProjects';

export default function Project_App({
  app,
  hasImages = true,
  children,
}: {
  app: App;
  hasImages?: boolean;
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
        {hasImages ? (
          <>
            {[1, 2, 3].map((n) => {
              return (
                <img
                  key={n}
                  src={`/images/${app.title}/${n}.PNG`}
                  className='screenshot'
                  style={{
                    rotate: `${randomAngle(n)}deg`,
                    translate: `0px ${randomShift()}em`,
                  }}
                />
              );
            })}

            <div className='portfolio-item-abstract'>{app.abstract}</div>
          </>
        ) : (
          <div>{app.abstract}</div>
        )}
      </div>

      {children ?? null}
    </div>
  );
}
