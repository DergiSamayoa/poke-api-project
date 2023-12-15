import { useState } from "react"

const URLapi = "https://pokeapi.co/api/v2/pokemon"



const useGetAllData = (url) => {
  const [data, setData] = useState([])

  const fetchPokemons = async(pageNumber) => {
    try {
      const response = await fetch(URLapi)
      const data = await response.json()
    }
    catch (error) {
      console.error(error)
    }
  }

  return {
    data
  }
}
export default useGetAllData