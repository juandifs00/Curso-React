import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";

const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokemons</h1>

      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* <h2>{data?.name}</h2> */}

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>

      <button
        className="btn btn-primary mt-2"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Siguiente
      </button>
    </>
  );
};

export default MultipleCustomHooks;
