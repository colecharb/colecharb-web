import FlavorMeter, { Coffee, FlavorLevel } from "../../../flavor-meter/src/components/FlavorMeter";
import { useState } from "react";

export default function () {

  const chocolateState = useState<FlavorLevel>(4);
  const spiceState = useState<FlavorLevel>(2);
  const nutState = useState<FlavorLevel>(1);
  const herbState = useState<FlavorLevel>(1);
  const flowerState = useState<FlavorLevel>(3);
  const fruitState = useState<FlavorLevel>(2);
  const caramelState = useState<FlavorLevel>(2);

  const flavors = [
    'chocolate',
    'spice',
    'nut',
    'herb',
    'flower',
    'fruit',
    'caramel'
  ]

  const flavorStates = {
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
    const parsedInt = parseInt(value);
    if (0 <= parsedInt && parsedInt <= 4) {
      setState(value);
    }
  }


  return (
    <div>
      <h3>Flavor Navigator</h3>

      <div style={{ display: 'flex', flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: 'space-around' }}>

        <div style={{}}>
          <div style={{ width: '75vw', maxWidth: '350px', backgroundColor: 'white', borderRadius: '10px', padding: '1em' }}>
            <FlavorMeter coffee={testCoffee} />
          </div>
        </div>

        <table style={{ margin: '1em' }}>
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
            )
          })}
        </table>

      </div>

      <div style={{}}>
        Flavor profile visualizer for Barrington Coffee Roasting Company redesigned as an alternative to using static images. The component runs on Chart.js in React using TypeScript. Storing flavor profiles as flavor data instead of images enables discovery of similar coffees via a distance metric in 7-dimensional flavor space.
      </div>

    </div >
  )
}