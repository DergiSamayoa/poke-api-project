import { useDispatch, useSelector } from "react-redux"
import InputSearch from "./InputSearch"
import useFetch from "../hooks/useFetch"
import { setDataPokemons } from "../store/slices/dataPokemons"
import { useEffect, useState } from "react"

const NavPoke = () => {
  const {data:{ results = []}} = useFetch('https://pokeapi.co/api/v2/type/')
  
  const dispatch = useDispatch()
  const trainerName = useSelector((store) => store.trainerName)

  const handleOptions = async(e) => {
    let value = e.target.value
    
    try {
      if (value === "all") {
        const response =  await fetch("https://pokeapi.co/api/v2/pokemon/?limit=15&offset=151")
        const data = await response.json()
        const newDataTypes = data.results
        dispatch(setDataPokemons(newDataTypes))
      }else{
      const response = await fetch("https://pokeapi.co/api/v2/type/" + value)
      const data = await response.json()
      const newDataTypes = data.pokemon.map((pok) => pok.pokemon)
      dispatch(setDataPokemons(newDataTypes))}
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="h-[150px] w-full bg-[#cc0000] bg-contain bg-no-repeat flex justify-center items-center text-black">
      <section className="relative w-[95%] max-w-[1920px] h-[90%] bg-[#fff] rounded-xl shadow-[0_5px_50px_0_rgba(55,71,79,0.1)] flex gap-6 items-center justify-end px-6">
        <img className="w-[250px] absolute top-[-20px] left-10" src="/images/logo.png" alt="" />
        <h2 className="text-[#cc0000] absolute bottom-2 left-10 text-lg font-medium">Welcome Trainer Jesús!</h2>
        <InputSearch />
        <select onChange={handleOptions} className="capitalize w-[200px] h-[40px] rounded-md  flex justify-between shadow-[0_5px_50px_0_rgba(55,71,79,0.2)] border-[1px] border-[#eee] px-4 outline-none" name="" id="">
          <option value="all">All</option>
          {results.map((type) => {
            return <option className="capitalize" key={type.name} value={type.name}>{type.name}</option>
          })}
        </select>
      </section>
    </nav>
  )
}
export default NavPoke