import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useDominantColor from "../hooks/useDominantColor";
import NavPagePokeInfo from "./NavPagePokeInfo";

const PagePokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const { id } = useParams() //id del pokemon

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255
    return percent + "%";
    
  }
  
  const { dominantColor, darkerColor, lighterColor} =useDominantColor(pokemonInfo?.sprites?.other["dream_world"].front_default || pokemonInfo?.sprites?.other["official-artwork"].front_default || pokemonInfo?.sprites?.front_default)

  const colorByType =  {
    normal:"bg-[#c3b59b]",
    grass: "bg-[#35b44b]",
    fire: "bg-[#f7941f]",
    water: "bg-[#00aeed]",
    electric: "bg-[#faeb30]",
    ice: "bg-[#a3dcf7]",
    ground: "bg-[#ffcc69]",
    rock: "bg-[#c39a6e]",
    bug: "bg-[#aacf4e]",
    ghost: "bg-[#877299]",
    poison: "bg-[#91288d]",
    steel: "bg-[#a1abb4]",
    fighting: "bg-[#bc1e2c]",
    flying: "bg-[#c2b7d9]",
    dragon: "bg-[#4d2f8f]",
    dark: "bg-[#3e2417]",
    fairy: "bg-[#f392bd]",
    unknown: "bg-[#343436]",
    pshychic: "bg-[#ec2b7a]",
    cell: "bg-[#68afa9]",
    cyber: "bg-[#3956a4]",

    
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(({data}) => setPokemonInfo(data))
    .catch(err => console.log(err))
    
  }, [id])

  if(!pokemonInfo) {
    return <p>Loading...</p>
  }

  return (
    <main >
      <section >
         < NavPagePokeInfo  />
      </section>
      <article className=" w-[980px] mx-auto my-72 font-roboto max-sm:w-[350px] max-sm:mx-auto max-sm:my-15 max-lg:w-[600px] max-lg:mx-auto max-lg:my-15 max-sm:-translate-y-52  ">
        <header className="relative">
          <img className="absolute -top-[250px] left-[calc(50%-250px)] max-sm:h-[250px] max-sm:left-[calc(50%-120px)] max-sm:top-[-70px]" src={pokemonInfo?.sprites?.other["official-artwork"].front_default} alt="" />
          <div className=" h-[200px] rounded-t-lg max-sm:h-[150px]" 
          style={
            {
              background: `radial-gradient(circle at 50% 37%, ${lighterColor} 5px, ${darkerColor})`, borderColor: dominantColor, color: darkerColor 
            }
          }>.
          </div>
        </header>

        <div className="grid gap-8 shadow-lg rounded-lg">
          {/*1RO*/}
        <section className="text-center max-sm:w-[350px]">

          <div className="text-[45px] capitalize max-sm:text-[25px]">
            <span>#{pokemonInfo?.id}</span>
            <div className="flex justify-center items-center gap-1">
              <hr className="w-[200px]" />
              <h3 >{pokemonInfo?.name}</h3>
              <hr className="w-[200px]"/>
            </div> 
          </div>
          <div className=" grid grid-cols-2 pt-4 w-[250px] mx-auto">
            <div>
            <h5 className="text-[16px] max-sm:text-[12px]">Weight</h5>
            <span className="text-[25px] max-sm:text-[15px]">{pokemonInfo?.weight}</span>
            </div>
            <div>
            <h5 className="text-[16px] max-sm:text-[12px]">Weight</h5>
            <span className="text-[25px] max-sm:text-[15px]">{pokemonInfo?.height}</span>
          </div>
        </div>  
        </section>
       
       
        {/*2DO*/}
        <section className="grid grid-cols-2 gap-4 text-center max-sm:w-[350px] ">
        <div>
          <h4 className="text-[30px] max-sm:text-[20px]">Types</h4>
          <ul className="flex justify-center gap-4 flex-wrap">
            {pokemonInfo?.types.map((type) => (
              <li
                key={type.type.name}
                className={`capitalize text-[25px]  max-sm:text-[15px] px-14 max-sm:px-8 py-[1px] rounded-md text-yellow-100 ${colorByType[type.type.name]}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

          <div>  
            <h4 className="text-[30px] max-sm:text-[20px]">Abilities</h4>
            <ul className="flex justify-center gap-4 flex-wrap">
            
              {pokemonInfo?.abilities.map((ability) => (
                <li key={ability.ability.name}
                    className="capitalize text-[25px] max-sm:text-[15px] border-2 px-14 max-sm:px-8 py-[1px] max-sm:py-[1px] h-10 max-sm:h-7 ">
                  {ability.ability.name}
                </li>
                
                
                )) }
            
            </ul>
            
            

          </div>

        </section>
        

        {/*3RO*/}
        <section className=" p-20 max-sm:p-5 max-sm:w-[350px]">
          <div className="flex  items-center gap-1">
            <h4 className="text-[45px] max-sm:text-[25px] ">Stats</h4>
            <hr className="w-full mt-3"/>
          </div>
          
          <ul className="grid gap-4">
            {pokemonInfo?.stats.map((stat) => (
              
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5 className="capitalize">{stat.stat.name} :</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                {/*Contenedor de barra de progreso*/}
                <div className="h-6 bg-slate-200 rounded-sm overflow-hidden">
                   <div 
                    style={
                      {
                        width: getPercentBarProgress(stat.base_stat),
                      }
                    }
                    className="h-full bg-gradient-to-r from-orange-400 to-yellow-400">
                  {/*Progreso / TOTAL */}
                </div>
                </div>
               
              </li>
                
            ))}
          </ul>          
        </section>


       
        </div>
        <br /><br /><br />
         {/*4TO*/}
        <section className="shadow-md p-20 max-sm:w-[350px] max-sm:p-6">
          <div className="flex  items-center gap-1">
           <h4 className="text-[45px] max-sm:text-[25px]" >Movements</h4> 
           <hr className="w-full  mt-3" />
          </div>
          
          <ul className="flex flex-wrap text-sm  justify-between rounded-lg">
          {pokemonInfo?.moves.map((move) => (
            <li key={move.move.name}
            className="bg-[#E5E5E5]  p-2 m-1 rounded-full px-5">
              {move.move.name}
            </li>
          )
           )}
          </ul>
        </section>
      </article>
    </main>
  )
}
export default PagePokemonInfo