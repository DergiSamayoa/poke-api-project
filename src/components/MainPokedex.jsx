import useFetch from "../hooks/useFetch"
import PokeCard from "./PokeCard"
import NavPoke from "./NavPoke"
import { useDispatch, useSelector } from "react-redux"
import { setDataPokemons } from "../store/slices/dataPokemons"
import { useEffect } from "react"
import usePagination from "../hooks/usePagination"
import Pagination from "./Pagination"
import { setPokemonNames } from "../store/slices/pokemonNames"

const BaseUrlComplete = "https://pokeapi.co/api/v2/pokemon/?limit=1292"


const MainPokedex = () => {
  const dispatch = useDispatch()
  const { data:{ results = []} } = useFetch(BaseUrlComplete)
  const dataPokemons = useSelector((store) => store.dataPokemons)

  const { 
      currentPage, 
      setCurrentPage, 
      nextPage, 
      prevPage, 
      totalPages, 
      currentDisplay,
      pagesOnCurrentBlock 
    } = usePagination(dataPokemons, 20)

  useEffect(() => {
    dispatch(setPokemonNames(results))
    if(results && results.length > 0) {
      dispatch(setDataPokemons(results))
    }
  }, [dispatch, results])

  // console.log(filterDataPokemons)

  return (
    <>
      <NavPoke />
      <main className="bg-[#E3ECF2] min-h-screen w-full p-10">
        <article className="w-full grid grid-cols-4 gap-10 place-items-center max-w-[1920px] mx-auto max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {currentDisplay.map((pokemon) => (
            <PokeCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </article>
        <Pagination 
              lastPage={totalPages} 
              pagesOnCurrentBlock={pagesOnCurrentBlock} 
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage}
          />
      </main>
    </>
  )
}
export default MainPokedex