import { useDispatch, useSelector } from "react-redux"
import { setDataPokemons } from "../store/slices/dataPokemons"
import { useState } from "react"

const InputSearch = () => {
  const pokemonNames = useSelector((store) => store.pokemonNames)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    filterNames(e.target.name.value)
    setInputValue("")
    setFilteredOptions([])
  }

  function filterNames(value) {
    const filterNames = pokemonNames.filter((name) => {
      return name.name.toLowerCase().includes(value.toLowerCase())
    })
    dispatch(setDataPokemons(filterNames))
  }

  const [inputValue, setInputValue] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  
  const handleInputchange = (event) => {
    const options = pokemonNames.map((name) => name.name.toLowerCase())
    const value = event.target.value.toLowerCase()
    setInputValue(value)
    if(value.length > 0){
      setFilteredOptions(
            options.filter(
                (option) => option.includes(value)
            )
      )
    }
    else {
        setFilteredOptions([]);
    }
  }

  const handleOptionClick = (option) => {
    setInputValue("")        //or option
    setFilteredOptions([])
    filterNames(option)
  }

  return (
    <form onSubmit={handleSubmit}
          className="z-50 w-[400px] h-[40px] rounded-md  flex justify-between shadow-[2px_2px_50px_0_rgba(55,71,79,0.2)] border-[1px] border-[#eee] max-sm:w-auto dark:border-slate-600">
      <input 
          value={inputValue} 
          onChange={handleInputchange}
          name="name" 
          className="bg-transparent rounded-xl px-4 w-full outline-none max-sm:w-[200px] dark:text-white" type="text" placeholder="Search your pokemon!" 
          autoComplete="off"/>
      <button 
          type="submit"
          className="w-[80px] h-full bg-[#cc0000] rounded-md text-white max-sm:w-[60px]">
        Search
      </button>
      {filteredOptions.length > 0 && (
          <ul className="absolute mt-10 w-[260px] z-50 bg-[#ffcb05] dark:bg-[#306cb4]  p-1">
          {filteredOptions.map((option, index) => (
              <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="cursor-pointer dark:bg-[#306cb4]  dark:text-[#ffcb05] text-[#306cb4] 
                        hover:dark:bg-[#334155] hover:bg-[#306cb4] hover:text-[#ffcb05] p-2
                        rounded-md"
              >
              {option}
              </li>
          )).slice(0, 10)}
          </ul>
      )}
    </form>
  )
}
export default InputSearch