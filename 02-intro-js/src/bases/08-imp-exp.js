// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

// console.log(heroes);
// console.log(owners);

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroesById(2));
// console.log(getHeroesById(3));

export const getHeroesOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesOwner('Marvel'));
// console.log(getHeroesOwner('DC'));