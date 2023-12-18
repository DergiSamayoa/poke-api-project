import { useDispatch, useSelector } from "react-redux"
import { setSearchPokemon } from "../store/slices/searchPokemon"

const InputSearch = () => {
  //const searchPokemon = useSelector((store) => store.searchPokemon)
  const dispatch = useDispatch()


  //console.log(searchPokemon)

  const handleSubmit = (e) => {
    e.preventDefault()
    let value = e.target.name.value
    console.log(value)
  }
  
  const handleChange = (e) => {
    let value = e.target.value
    console.log(value)
    dispatch(setSearchPokemon(value))
  }

  return (
    <form onSubmit={handleSubmit} className="w-[400px] h-[40px] rounded-md  flex justify-between shadow-[2px_2px_50px_0_rgba(55,71,79,0.2)] border-[1px] border-[#eee]">
      <input onChange={handleChange} className="rounded-xl px-4 w-[300px] outline-none" type="text" name="name" placeholder="Search your pokemon!"/>
      <button className="w-[80px] h-full bg-[#cc0000] rounded-md text-white">Search</button>
    </form>
  )
}
export default InputSearch