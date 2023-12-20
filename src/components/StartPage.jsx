import { useDispatch } from "react-redux"
import { setTrainerName } from "../store/slices/trainerName"
import { useNavigate } from "react-router-dom"

const StartPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault()
    let value = e.target.name.value
    dispatch(setTrainerName(value))
    navigate("/pokedex")

  }

  return (
    <article className="flex justify-center items-center w-full min-h-screen bg-[url(/images/background.jpeg)] bg-cover bg-center px-6 overflow-hidden max-sm:py-10">
      <section className="relative flex gap-16 flex-col justify-center items-center bg-blue-300/30 backdrop-blur-sm w-[1000px] h-[495px] border-[14px] border-[#37474f] rounded-[50px] max-sm:h-[550px] max-sm:px-4 max-sm:gap-12 max-sm:pt-12 max-sm:pb-44 mt-[100px]">
        <img className="absolute top-[-170px] h-[300px] max-sm:h-[150px] max-sm:top-[-90px]" src="/images/logo.png" alt="logo" />
        <img className="absolute w-[350px] right-[-190px] bottom-[-1px] max-sm:w-[200px] max-sm:right-[-115px]" src="/images/pokeball.png" alt="pokeball" />
        <h2 className="text-4xl font-semibold text-center max-sm:text-xl">Hola Entrenador Pokemón!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
          <input className="w-[400px] h-[70px] bg-transparent rounded-[17px] border-4 border-[#37474f] text-xl text-center placeholder:text-black outline-none max-lg:w-[400px] max-md:w-[250px] max-md:text-sm max-md:h-[55px]" name="name" type="text" placeholder="Ingresa tu nombre para empezar" autoComplete="off"/>
          <button className="w-[200px] h-[55px] bg-[#cc0000] font-semibold rounded-[17px] hover:bg-[#880000] shadow-[0_5px_5px_0_rgba(55,71,79,0.5),0_1px_10px_0_rgba(0,0,0,0.12),0_2px_4px_-1px_rgba(0,0,0,0.2)] max-sm:w-[200px] max-sm:h-[45px] ">Empezar</button>
        </form>
      </section>
    </article>
  )
}
export default StartPage