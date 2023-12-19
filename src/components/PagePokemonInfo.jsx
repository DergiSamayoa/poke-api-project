import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavPoke from "./NavPoke";
import useDominantColor from "../hooks/useDominantColor";


const PagePokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const { id } = useParams() //id del pokemon

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255
    return percent + "%";
    
  }
  
  
  
  const { dominantColor, darkerColor, lighterColor, loading} =useDominantColor(pokemonInfo?.sprites?.other["official-artwork"].front_default)

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
// console.log(pokemonInfo?.types.map((type) => type.type.name));
// console.log(pokemonInfo?.abilities.map((ability) => ability.ability.name));
// console.log(pokemonInfo?.moves.map((move) => move.move.name));

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(({data}) => setPokemonInfo(data))
    .catch(err => console.log(err))
    
  }, [])

  
  if(!pokemonInfo) {
    return <p>Loading...</p>
  }

 //hay que trabajaras


  return (
    <main >
      
        <NavPoke />
     
      <article className=" max-w-[1108px] mx-auto my-72">

        
        <header className="relative">
          <img className="absolute -top-[250px] left-[calc(50%-250px)]" src={pokemonInfo?.sprites?.other["official-artwork"].front_default} alt="" />
          <div className=" h-[200px] " 
          style={
            {
              background: `radial-gradient(circle at 50% 37%, ${lighterColor} 5px, ${darkerColor})`, borderColor: dominantColor, color: darkerColor 
            }
          }>.
          </div>
        </header>

        <div className="p-3 grid gap-8 shadow-lg ">
          {/*1RO*/}
        <section className="text-center ">

          <div className="text-[45px] capitalize">
            <span>#{pokemonInfo?.id}</span>
            <div className="flex justify-center items-center gap-1">
              <hr className="w-[200px]" />
              <h3 >{pokemonInfo?.name}</h3>
              <hr className="w-[200px]"/>
            </div>
              
            
            
          </div>
        
           <div className=" grid grid-cols-2 pt-1">
            <div>
            <h5 className="text-[16px]">weight</h5>
            <span className="text-[25px]">{pokemonInfo?.weight}</span>
            </div>
            <div>
            <h5 className="text-[16px]">height</h5>
            <span className="text-[25px]">{pokemonInfo?.height}</span>
          </div>
        
        </div>  
         
        </section>
       
       
        {/*2DO*/}
        <section className="grid grid-cols-2 gap-4 text-center">
        <div>
          <h4 className="text-[30px]">types</h4>
          <ul className="flex justify-center gap-4">
            {pokemonInfo?.types.map((type) => (
              <li
                key={type.type.name}
                className={`capitalize text-[25px]  px-14 py-[1px] rounded-md text-yellow-100 ${colorByType[type.type.name]}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

          <div>  
            <h4 className="text-[30px]">abilities</h4>
            <ul className="flex justify-center gap-4 flex-wrap">
            
              {pokemonInfo?.abilities.map((ability) => (
                <li key={ability.ability.name}
                    className="capitalize text-[25px] border-2 px-14 py-[1px] h-10 ">
                  {ability.ability.name}
                </li>
                
                
                )) }
            
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
        <section className="shadow-md p-3">
          <div className="grid grid-cols-2 items-center" >
           <h4 className="text-[45px]" >Movements</h4> 
           <hr className="w-100 h-5" />
          </div>
          
          <ul className="flex flex-wrap text-sm justify-center justify-between">
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