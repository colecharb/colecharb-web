// import FlavorMeter, { Coffee, FlavorLevel, FlavorLevels, FlavorName } from "./FlavorMeter";
import { useState } from "react";
import CoffeeInfo from "./flavorNavigator/CoffeeInfo";
import coffees from "./flavorNavigator/coffees";
import FlavorMeter from "./flavorNavigator/FlavorMeter";
import HorizontalLine from "./flavorNavigator/HorizontalLine";
import SimilarCoffees from "./flavorNavigator/SimilarCoffees";

export default function () {

  // init with random coffee from coffees
  const getRandomCoffeeIndex = () => Math.floor(Math.random() * coffees.length);

  const [coffeeIndex, setCoffeeIndex] = useState<number>(getRandomCoffeeIndex());

  const coffee = coffees[coffeeIndex];

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2em' }}>

      <h3 className='portfolio-item-title'>
        Flavor Navigator
      </h3>

      <div style={{ minWidth: '30vw' }} className="portfolio-item-abstract">
        Flavor profile visualizer for <a href='https://barringtoncoffee.com/' target='_blank'>
          Barrington Coffee Roasting Company
        </a>, redesigned as an alternative to using static images.
        The component runs on Chart.js in a Typescript React app.
      </div>

      <div style={{ border: "solid grey 1px", borderRadius: '1em', padding: '1em' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '2em',
        }}>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            // width: '50%',
            flex: 1,
            minWidth: '300px',
            maxWidth: '400px',
            justifyContent: 'center',
          }}>

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
            />
          </div>

        </div>

        <HorizontalLine />

        <h4>
          All Coffees
        </h4>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5em' }}>
          {coffees.map((coffee, index) =>
            <button
              onClick={() => setCoffeeIndex(index)}
            >
              {coffee.name}
            </button>
          )}
        </div>

      </div>



      <div className="portfolio-item-description">
        <p>
          This project was my first foray into desigining a standalone React app for integration into a preexisting site.
          In working on this project, I learned a lot about state variables in React and making charts with Chart.js.
          Fortunately, state management in React.js is very similar to that in React Native, which I was quite familiar with already.
        </p>

        <p>
          Next, I plan to define a distance metric on the above 7-dimensional flavor space to enable discovery of similar coffees.
        </p>
      </div>

    </div>
  );
}