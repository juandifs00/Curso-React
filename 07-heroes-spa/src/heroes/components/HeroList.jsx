import HeroCard from "./HeroCard";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

const HeroList = ({ publisher }) => {
  if (!publisher) return <></>;
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
