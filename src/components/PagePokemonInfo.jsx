import { useParams } from "react-router-dom"

const PagePokemonInfo = () => {

  const { id } = useParams() //id del pokemon
  




  return (
    <div>PagePokemonInfo {id}</div>
  )
}
export default PagePokemonInfo