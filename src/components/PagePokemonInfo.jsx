import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const PagePokemonInfo = () => {

  //const { id } = useParams() //id del pokemon
  const {data} = useFetch('https://pokeapi.co/api/v2/pokemon/7/')

  console.log(data)

 //hay que trabajaras


  return (
    <div>PagePokemonInfo </div>
  )
}
export default PagePokemonInfo