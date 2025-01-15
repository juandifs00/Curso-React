import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

const HeroList = ({ publisher }) => {
  if (!publisher) return <></>;
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <li key={hero.id} className="card">
            {hero.superhero}
        </li>
      ))}
    </div>
  );
};

export default HeroList;
