import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const PagePokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const { id } = useParams() //id del pokemon

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255
    return percent + "%";
    
  }

  const colorByType =  {
    grass: "bg-green-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-500",
    normal: "bg-gray-500",
    ice: "bg-cyan-500",
    ground: "bg-amber-500",
    rock: "bg-orange-500",
    bug: "bg-lime-500",
    ghost: "bg-purple-500",
    poison: "bg-fuchsia-500",
    steel: "bg-slate-500",
    fighting: "bg-pink-500",
    flying: "bg-sky-500",
    dragon: "bg-violet-500",
    dark: "bg-black",
    fairy: "bg-fuchsia-500",
    unknown: "bg-gray-500",
    shadow: "bg-gray-500",

    
  }
console.log(pokemonInfo?.types.map((type) => type.type.name));
console.log(pokemonInfo?.abilities.map((ability) => ability.ability.name));
console.log(pokemonInfo?.moves.map((move) => move.move.name));

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(({data}) => setPokemonInfo(data))
    .catch(err => console.log(err))
    
  }, [])

  
  if(!pokemonInfo) {
    return <p>Loading...</p>
  }
  console.log(data)

 //hay que trabajaras


  return (
    <main >
      <article className=" max-w-[500px] mx-auto ">
        <header>
          <img src={pokemonInfo?.sprites?.other["official-artwork"].front_default} alt="" />
        </header>
        {/*1RO*/}
        <section className="text-center ">
           <span>#{pokemonInfo?.id}</span>
        <h3>Pokemon Name</h3>
        <div className=" grid grid-cols-2">
          <div>
            <h5>weight</h5>
            <span>{pokemonInfo?.weight}</span>
          </div>
          <div>
            <h5>height</h5>
            <span>{pokemonInfo?.height}</span>
          </div>
        </div>
        </section>
       
       
        {/*2DO*/}
        <section className="grid grid-cols-2 gap-4 text-center">
        <div>
          <h4>types</h4>
          <ul className="flex justify-center gap-4">
            {pokemonInfo?.types.map((type) => (
              <li
                key={type.type.name}
                className={`capitalize ${colorByType[type.type.name]}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

          <div>  
            <h4>abilities</h4>
            <ul className="flex justify-center gap-4">
              <li>
              {pokemonInfo?.abilities.map((ability) => ability.ability.name).join(" / ")}
            </li>
            </ul>
            
            

          </div>

        </section>
        

        {/*3RO*/}
        <section>
          <h4>stats</h4>
          <ul className="grid gap-4">
            {pokemonInfo?.stats.map((stat) => (
              
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5 className="capitalize">{stat.stat.name}</h5>
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


        {/*4TO*/}
        <section >
          <h4>movements</h4>
          <ul className="flex flex-wrap text-sm ">
          {pokemonInfo?.moves.map((move) => 
           move.move.name).join(" / ")}
          </ul>
        </section>
      </article>
    </main>
  )
}
export default PagePokemonInfo