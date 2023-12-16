import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import PokeCard from "./PokeCard"


const BaseURL = "https://pokeapi.co/api/v2/pokemon/?limit="
const limit = 20
const offset = 151


const MainPokedex = () => {
  const trainerName = useSelector((store) => store.trainerName)



  const { data:{ results = []} } = useFetch(BaseURL + limit + "&offset=" + offset)
  console.log(results)
  
  
  return (
    <>
    <main className="bg-[#E3ECF2] min-h-screen w-full p-10">
    <h2 className="w-full text-center text-3xl">Bienvenido {trainerName}</h2>
    <article className="w-full grid grid-cols-4 gap-10 place-items-center">
      {results.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </article>
    </main>
    </>
  )
}
export default MainPokedex