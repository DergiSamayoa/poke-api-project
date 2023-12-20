import { Route, Routes } from "react-router-dom"
import MainPokedex from "./components/MainPokedex"
import ProtectedRoutes from "./components/ProtectedRoutes"
import StartPage from "./components/StartPage"
import PagePokemonInfo from "./components/PagePokemonInfo"
import { useEffect } from "react"

const dark = localStorage.getItem('POKEMONS_MODE_DISPLAY')

function App() {

  useEffect(() => {
    if(dark === "dark") {
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // console.log(dark)
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      {/* <Route path="/" element={<MainPokedex />} /> */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/pokedex" element={<MainPokedex />} />
        <Route path="/pokedex/:id" element={<PagePokemonInfo />} />
      </Route>
    </Routes>
  )
}

export default App
 