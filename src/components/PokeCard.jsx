import { Link } from "react-router-dom";
import useDominantColor from "../hooks/useDominantColor";
import useFetch from "../hooks/useFetch";

const PokeCard = ({ pokemon }) => {
  const urlPokemon = pokemon.url
  const { data } = useFetch(urlPokemon);
  //console.log(data)
  const { dominantColor, darkerColor, lighterColor } = useDominantColor(data?.sprites?.other["dream_world"].front_default);


  return (
    <>
      <Link to={`/pokedex/${data.id}`} className="w-[261px] h-[383px] rounded-lg border-8"
        style={{ background: `radial-gradient(circle at 50% 37%, ${lighterColor} 5px, ${darkerColor})`, borderColor: dominantColor }}
      >
        <img
          src={data.sprites?.other["official-artwork"].front_default}
          alt="img"
        />
      </Link>
    </>
  );
};
export default PokeCard;
