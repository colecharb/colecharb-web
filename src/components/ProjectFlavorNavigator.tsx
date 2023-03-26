import FlavorMeter, { Coffee, FlavorLevel, FlavorLevels, FlavorName } from "./FlavorMeter";
import { useState } from "react";

export default function () {

  const chocolateState = useState<FlavorLevel>(4);
  const spiceState = useState<FlavorLevel>(2);
  const nutState = useState<FlavorLevel>(1);
  const herbState = useState<FlavorLevel>(1);
  const flowerState = useState<FlavorLevel>(3);
  const fruitState = useState<FlavorLevel>(2);
  const caramelState = useState<FlavorLevel>(2);

  const flavors: FlavorName[] = [
    'chocolate',
    'spice',
    'nut',
    'herb',
    'flower',
    'fruit',
    'caramel'
  ]

  const flavorStates: { [key in FlavorName]: [FlavorLevel, React.Dispatch<React.SetStateAction<FlavorLevel>>] } = {
    chocolate: chocolateState,
    spice: spiceState,
    nut: nutState,
    herb: herbState,
    flower: flowerState,
    fruit: fruitState,
    caramel: caramelState,
  }

  const testCoffee: Coffee = {
    name: 'Diamante Perez',
    price: '19.45',
    origin: 'Guatemala',
    region: 'Huehuetenango',
    locality: 'Agua Dulce',
    farm: 'El Diamante',
    producer: 'Patricia Perez Diaz',
    altitude: "6200'",
    variety: 'Red Bourbon & Caturra',
    process: 'Washed, sun dried',
    roast: 'Light',
    flavorLevels: {
      chocolate: chocolateState[0],
      spice: spiceState[0],
      nut: nutState[0],
      herb: herbState[0],
      flower: flowerState[0],
      fruit: fruitState[0],
      caramel: caramelState[0],
    },
    description: 'Perfume aroma with dark chocolate character, vibrant lemon and berry tones accentuated with subtle tropical flavors of pineapple and mango. A Huehuetenango powerhouse filled with fruit tones and Zinfandel structure.'
  }

  const stableSet = (value: string, setState: React.Dispatch<React.SetStateAction<FlavorLevel>>) => {
    const parsedInt = parseInt(value) as FlavorLevel;
    if (0 <= parsedInt && parsedInt <= 4) {
      setState(parsedInt);
    }
  }


  return (
    <div className='portfolio-item'>
      <h3>Flavor Navigator</h3>

      <div
        className="portfolio-item-content-container"
      // style={{ display: 'flex', flexDirection: "column", flexWrap: 'wrap', justifyContent: 'center', gap: '2em', alignItems: 'center', paddingBottom: '1em' }}
      >

        <div style={{ display: 'flex', flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: 'center', gap: '2em' }}>

        {/* <div style={{}}> */}
        <div style={{ width: '75vw', maxWidth: '300px', backgroundColor: 'white', borderRadius: '10px', padding: '1em' }}>
            <FlavorMeter coffee={testCoffee} />
          </div>
        {/* </div> */}

        <table style={{}}>
          {flavors.map(flavor => {

            const state = flavorStates[flavor];

            return (
              <tr>
                <td
                  align='right'
                  style={{ textTransform: "capitalize", }}
                >
                  {flavor}:
                </td>
                <td>{state[0]}</td>
                <td>
                  <input
                    // name='chocolate'
                    type='range'
                    value={state[0]}
                    min={0}
                    max={4}
                    onChange={e => stableSet(e.target.value, state[1])}
                  />
                </td>
              </tr>
            );
          })}
        </table>



        </div>


        <div style={{ minWidth: '30vw' }} className="portfolio-item-abstract">
          Flavor profile visualizer for <a href='https://barringtoncoffee.com/'>
            Barrington Coffee Roasting Company
          </a>, redesigned as an alternative to using static images.
          The component runs on Chart.js in a Typescript React app.
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




    </div >
  )
}