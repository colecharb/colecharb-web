import { Coffee, FlavorName } from "./FlavorMeter";
import HorizontalLine from "./HorizontalLine";

export const THRESHOLD = 3;

export default function ({ index, coffees, setCoffeeIndex }: { index: number, coffees: Coffee[], setCoffeeIndex: React.Dispatch<React.SetStateAction<number>> }) {

  // const coffee = coffees[index];

  const similarCoffeeIndices = getSimilarCoffeeIndices({
    toIndex: index,
    from: coffees,
    threshold: THRESHOLD,
  });

  console.log(similarCoffeeIndices);

  return (
    <>
      <HorizontalLine />

      <h4>
        Similar Coffees
      </h4>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '0.5em' }}>
        {similarCoffeeIndices.map(i => (
          <button
            onClick={() => setCoffeeIndex(i)}
          // style={{ textAlign: 'left', paddingLeft: '0px' }}
          >
            {coffees[i].name}
          </button>
        ))}
      </div>

    </>
  )
}


const getSimilarCoffeeIndices = ({ toIndex, from, threshold }: { toIndex: number, from: Coffee[], threshold: number }) => {

  const coffees = from;

  const coffee = coffees[toIndex];

  return [...Array(coffees.length).keys()].filter((i) =>
    coffee.name !== coffees[i].name
    && coffee.roast === coffees[i].roast
    && euclidean(coffee, coffees[i]) <= threshold
  );
}


type Metric = (c1: Coffee, c2: Coffee) => number;

const euclidean: Metric = (c1, c2) => {

  const flavors = Object.keys(c1.flavorLevels) as FlavorName[];

  const squaredDifferences = flavors.map(flavor =>
    Math.pow(c1.flavorLevels[flavor] - c2.flavorLevels[flavor], 2)
  );

  const sumOfSquaredDifferences = squaredDifferences.reduce((previous, current) => previous + current)

  return Math.sqrt(sumOfSquaredDifferences);
};