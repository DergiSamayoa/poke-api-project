import { Link } from "react-router-dom";
import useDominantColor from "../hooks/useDominantColor";
import useFetch from "../hooks/useFetch";
import ShowTypePokemon from "../utils/ShowTypes";

const PokeCard = ({ pokemon }) => {
  const urlPokemon = pokemon.url
  const { data } = useFetch(urlPokemon);
  //console.log(data)
  const { dominantColor, darkerColor, lighterColor } = useDominantColor(data?.sprites?.other["official-artwork"].front_default);

  console.log(data)
  return (
    <>
      {data ? <Link to={`/pokedex/${data.id}`} className="relative w-[261px] h-[383px] rounded-xl border-8 flex flex-col justify-end" style={{ background: `radial-gradient(circle at 50% 37%, ${lighterColor} 5px, ${darkerColor})`, borderColor: dominantColor, color: darkerColor }}>
        <img className="absolute top-0 left-[calc(50%-80px)] w-[160px]" src={data.sprites?.other["official-artwork"].front_default} alt="img"/>
        <section className="bg-white w-full h-[66%] flex flex-col items-center pt-6 rounded-b-sm">
          <h4 className="text-[25px] font-medium capitalize text-center">{data.name}</h4>
          <h5 className="text-[14px] capitalize">{ShowTypePokemon(data.types)}</h5>
          <p className="text-[10px] opacity-80">Tipe</p>
          <section className="w-full h-[65%] flex justify-between px-6 py-1">
            <div className="h-full flex flex-col gap-4">
              <div className="text-center">
                <p className="text-[10px] opacity-80">HP</p>
                <p className="font-semibold">{}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] opacity-80">DEFENSE</p>
                <p className="font-semibold">{}</p>
              </div>
            </div>
            <div className="h-full flex flex-col gap-4">
              <div className="text-center">
                <p className="text-[10px] opacity-80">ATTACK</p>
                <p className="font-semibold">{}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] opacity-80">SPEED</p>
                <p className="font-semibold">{}</p>
              </div>
            </div>
          </section>
        </section>
      </Link> : <p>Loading...</p>}
    </>
  );
};
export default PokeCard;
