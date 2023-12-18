import useFetch from "../hooks/useFetch"
import PokeCard from "./PokeCard"
import NavPoke from "./NavPoke"
import { useDispatch, useSelector } from "react-redux"
import { setDataPokemons } from "../store/slices/dataPokemons"
import { useEffect } from "react"
import usePagination from "../hooks/usePagination"


const BaseURL = "https://pokeapi.co/api/v2/pokemon/?limit="
const limit = 10
const offset = 0
const BaseUrlComplete = "https://pokeapi.co/api/v2/pokemon/"


const MainPokedex = () => {
  const dispatch = useDispatch()
  const dataPokemons = useSelector((store) => store.dataPokemons)
  const { data:{ results = []} } = useFetch(BaseUrlComplete)
  const searchPokemon = useSelector((store) => store.searchPokemon)

  const { currentPage, setCurrentPage, nextPage, prevPage, totalPages, currentDisplay } = usePagination(dataPokemons, 20)



  useEffect(() => {
    if(results && results.length > 0) {
      dispatch(setDataPokemons(results))
    }
  }, [dispatch, results])
  
  const filterDataPokemons = dataPokemons.filter((poke) => {
    return poke.name.toLowerCase().includes(searchPokemon.toLowerCase())
  })

  console.log(currentDisplay)

  useEffect(() => {
    // Precargar imágenes de los Pokémon
    filterDataPokemons.forEach((pokemon) => {
      const img = new Image();
      img.src = pokemon.sprites?.other["official-artwork"].front_default;
      img.alt = pokemon.name;
      img.style.display = "none";
      document.body.appendChild(img);
    });
  }, [filterDataPokemons]);


  console.log(filterDataPokemons)
  return (
    <>
    <NavPoke />
    <main className="bg-[#E3ECF2] min-h-screen w-full p-10">
    <article className="w-full grid grid-cols-4 gap-10 place-items-center max-w-[1920px] mx-auto">
      {currentDisplay.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </article>
    </main>
    </>
  )
}
export default MainPokedex