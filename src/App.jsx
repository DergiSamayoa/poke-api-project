import MainPokedex from "./components/MainPokedex"
import PokeCard from "./components/PokeCard"
import StartPage from "./components/StartPage"
import useFetch from "./hooks/useFetch"


const BaseURL = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  const {data} = useFetch(BaseURL)


  return (
    <main className="bg-[#E3ECF2] min-h-screen w-full flex justify-center items-center">
      <PokeCard data={data} />
    </main>
  )
}

export default App
