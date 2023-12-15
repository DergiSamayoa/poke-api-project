import useDominantColor from "../hooks/useDominantColor";
import useFetch from "../hooks/useFetch";

const PokeCard = ({ pokemon }) => {
  const urlPokemon = pokemon.url
  const { data } = useFetch(urlPokemon);
  console.log(data)
  const { dominantColor, darkerColor } = useDominantColor(
    data?.sprites?.other["dream_world"].front_default
  );

  console.log(dominantColor, darkerColor)


  return (
    <>
      <section
        className="w-[261px] h-[383px] rounded-lg border-8"
        style={{ backgroundColor: dominantColor, borderColor: darkerColor }}
      >
        <img
          src={data.sprites?.other["official-artwork"].front_default}
          alt="img"
        />
      </section>
    </>
  );
};
export default PokeCard;
