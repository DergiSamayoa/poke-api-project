import { Route, Routes } from "react-router-dom"
import MainPokedex from "./components/MainPokedex"
import PagePokemonInfo from "./components/PagePokemonInfo"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPokedex />} />
      {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/pokedex" element={<MainPokedex />} />
        <Route path="/pokedex/:id" element={<PagePokemonInfo />} />
      {/* </Route> */}
    </Routes>
  )
}

export default App
 