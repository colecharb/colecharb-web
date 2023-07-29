// import FlavorMeter, { Coffee, FlavorLevel, FlavorLevels, FlavorName } from "./FlavorMeter";
import { useState } from 'react';
import coffees from './flavor-navigator/coffees';
import CoffeeInfo from './flavor-navigator/CoffeeInfo';
import FlavorMeter from './flavor-navigator/FlavorMeter';
import HorizontalLine from './flavor-navigator/HorizontalLine';
import SimilarCoffees, {
  NUMBER_SIMILAR,
} from './flavor-navigator/SimilarCoffees';
import { FLAVOR_METRIC_RECORD } from './flavor-navigator/FlavorMetrics';

export default function ProjectFlavorNavigator() {
  // init with random coffee from coffees
  const getRandomCoffeeIndex = () => Math.floor(Math.random() * coffees.length);

  const [coffeeIndex, setCoffeeIndex] = useState<number>(
    getRandomCoffeeIndex()
  );
  const [flavorMetricName, setFlavorMetricName] =
    useState<keyof typeof FLAVOR_METRIC_RECORD>('Euclidean');

  const coffee = coffees[coffeeIndex];
  const flavorMetric = FLAVOR_METRIC_RECORD[flavorMetricName];

  return (
    <div>
      <h3 className='big-text'>Flavor Navigator</h3>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2em',
        }}
      >
        <div
          style={{ minWidth: '30vw' }}
          className='portfolio-item-abstract'
        >
          Flavor profile visualizer for{' '}
          <a
            href='https://barringtoncoffee.com/'
            target='_blank'
            rel='noreferrer'
          >
            Barrington Coffee Roasting Company
          </a>
          , redesigned as an alternative to using static images. The component
          runs on Chart.js in a Typescript React app.
        </div>

        <div
          style={{
            border: 'solid grey 1px',
            borderRadius: '1em',
            padding: '1em',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '1em',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                minWidth: '300px',
                maxWidth: '400px',
              }}
            >
              {/* <HorizontalLine /> */}

              <div style={{ display: 'block', width: '100%' }}>
                <FlavorMeter coffee={coffee} />
              </div>
            </div>

            <div style={{ flex: 2, minWidth: '300px' }}>
              <CoffeeInfo coffee={coffee} />

              <SimilarCoffees
                index={coffeeIndex}
                coffees={coffees}
                setCoffeeIndex={setCoffeeIndex}
                flavorMetric={flavorMetric}
              />
            </div>
          </div>

          <HorizontalLine />

          <h4>Flavor Metric</h4>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5em',
            }}
          >
            {Object.keys(FLAVOR_METRIC_RECORD).map((metricName) => (
              <button
                key={metricName}
                style={
                  metricName === flavorMetricName
                    ? { textDecoration: 'underline' }
                    : undefined
                }
                onClick={() =>
                  setFlavorMetricName(
                    metricName as keyof typeof FLAVOR_METRIC_RECORD
                  )
                }
              >
                {metricName}
              </button>
            ))}
          </div>

          <HorizontalLine />

          <h4>All Coffees</h4>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5em',
            }}
          >
            {coffees
              .sort((c1, c2) => (c1.name < c2.name ? -1 : 1))
              .map((coffee, index) => (
                <button
                  key={coffee.name}
                  onClick={() => setCoffeeIndex(index)}
                  style={
                    coffeeIndex === index
                      ? { textDecoration: 'underline' }
                      : undefined
                  }
                >
                  {coffee.name}
                </button>
              ))}
          </div>
        </div>

        <div className='portfolio-item-description'>
          <p>
            Flavor data for each coffee is received by the component and
            displayed in a polar area graph, an intuitive visual representation
            of a point in seven-dimensional "flavor space." Using the selected
            metric, the component calculates the distance between the selected
            coffee and each other coffee in the list. The {NUMBER_SIMILAR} most
            similar coffees are then displayed.
          </p>

          <p>
            This project was my first foray into desigining a React application
            for integration into a preexisting site. In working on this project,
            I learned a lot about state variables in React and making charts
            with Chart.js. Fortunately, state management in React.js is very
            similar to that in React Native, which I was quite familiar with
            already.
          </p>
        </div>
      </div>
    </div>
  );
}
