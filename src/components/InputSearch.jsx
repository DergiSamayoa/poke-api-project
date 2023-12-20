import { useDispatch, useSelector } from "react-redux"
import { setDataPokemons } from "../store/slices/dataPokemons"

const InputSearch = () => {
  const pokemonNames = useSelector((store) => store.pokemonNames)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    filterNames(e.target.name.value)
  }

  /* const handleChange = (e) => {
    filterNames(e.target.value)
  } */

  function filterNames(value) {
    const filterNames = pokemonNames.filter((name) => {
      return name.name.toLowerCase().includes(value.toLowerCase())
    })

    dispatch(setDataPokemons(filterNames))
  }

  return (
    <form onSubmit={handleSubmit}
          className="z-20 w-[400px] h-[40px] rounded-md  flex justify-between shadow-[2px_2px_50px_0_rgba(55,71,79,0.2)] border-[1px] border-[#eee] max-sm:w-auto dark:border-slate-600">
      <input className="bg-transparent rounded-xl px-4 w-full outline-none max-sm:w-[200px] dark:text-white" type="text" name="name" placeholder="Search your pokemon!" autoComplete="off"/>
      <button className="w-[80px] h-full bg-[#cc0000] rounded-md text-white max-sm:w-[60px]">Search</button>
    </form>
  )
}
export default InputSearch