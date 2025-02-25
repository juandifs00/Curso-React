import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemons/thunks";

const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
    </>
  );
};

export default PokemonApp;
