import { useState } from "react";
import { useLayoutEffect, useRef } from "react";

const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();

    setBoxSize({ width, height });
  }, [sprites]);

  return (
    <>
      <section style={{ height: 200 }}>
        <h2 className="text-capitalize">
          #{id} - {name}
        </h2>

        {/* Imágenes */}
        <div ref={pRef}>
          {sprites.map((sprite) => (
            <img key={sprite} src={sprite} alt={name} />
          ))}
        </div>
      </section>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

export default PokemonCard;
