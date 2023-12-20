import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDominantColor from "../hooks/useDominantColor";
import NavPagePokeInfo from "./NavPagePokeInfo";
import colorByType from "../utils/colorsTypes";
import Loader from "./Loader";

const dark = localStorage.getItem("POKEMONS_MODE_DISPLAY");

const PagePokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const { id } = useParams(); //id del pokemon

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255;
    return percent + "%";
  };

  const { dominantColor, darkerColor, lighterColor } = useDominantColor(
    pokemonInfo?.sprites?.other["dream_world"].front_default ||
      pokemonInfo?.sprites?.other["official-artwork"].front_default ||
      pokemonInfo?.sprites?.front_default
  );

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!pokemonInfo) {
    return (
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ background: dark === "dark" ? "#334155" : "#fff" }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <main className="w-screen dark:bg-slate-700 dark:text-white">
      <section>
        <NavPagePokeInfo />
      </section>
      <article className=" w-[940px] pt-72 pb-10 font-roboto max-sm:my-15 max-lg:w-[600px]  max-sm:-translate-y-52 max-sm:w-full mx-auto">
        <header className="relative ">
          <img
            className="absolute -top-[250px] left-[calc(50%-250px)] max-sm:h-[250px] max-sm:left-[calc(50%-120px)] max-sm:top-[-70px]"
            src={pokemonInfo?.sprites?.other["official-artwork"].front_default}
            alt=""
          />
          <div
            className=" h-[200px] rounded-t-lg max-sm:h-[150px] shadow-[0_0_20px_0_rgba(0,0,0,0.2)] "
            style={{
              background: `radial-gradient(circle at 50% 37%, ${lighterColor} 5px, ${darkerColor})`,
              borderColor: dominantColor,
              color: darkerColor,
            }}
          >
            .
          </div>
        </header>

        <div className="grid gap-8 shadow-[0_0_15px_0_rgba(0,0,0,0.15)] rounded-b-lg border-[1px] dark:border-slate-500">
          {/*1RO*/}
          <section className="text-center max-sm:w-full">
            <div className="flex flex-col items-center text-[45px] pt-5 capitalize max-sm:text-[25px]">
              <div className="flex w-[78px] h-[45px] rounded-md justify-center items-center border-[1px] dark:border-slate-500">
                <h5
                  className="text-[40px] font-medium  max-sm:text-[30px]"
                  style={{ color: darkerColor }}
                >
                  #{pokemonInfo?.id}
                </h5>
              </div>
              <div className="flex justify-center items-center gap-1">
                <hr className="w-[200px] max-sm:w-0" />
                <h3
                  className="text-[45px] font-medium max-sm:shadow-lg max-sm:text-[30px]"
                  style={{ color: darkerColor }}
                >
                  {pokemonInfo?.name}
                </h3>
                <hr className="w-[200px] max-sm:w-0" />
              </div>
            </div>
            <div className=" grid grid-cols-2 pt-4 w-full mx-auto">
              <div>
                <h5 className="text-[16px] max-sm:text-[12px]">Weight</h5>
                <span className="text-[25px] max-sm:text-[15px] font-medium">
                  {pokemonInfo?.weight}
                </span>
              </div>
              <div>
                <h5 className="text-[16px] max-sm:text-[12px]">Height</h5>
                <span className="text-[25px] max-sm:text-[15px] font-medium">
                  {pokemonInfo?.height}
                </span>
              </div>
            </div>
          </section>

          {/*2DO*/}
          <section className="grid grid-cols-2 gap-4 text-center max-sm:w-full">
            <div>
              <h4 className="text-[30px] font-medium max-sm:text-[20px]">
                Types
              </h4>
              <ul className="flex justify-center gap-4 flex-wrap">
                {pokemonInfo?.types.map((type) => (
                  <li
                    key={type.type.name}
                    className={`capitalize w-[205px] max-sm:w-[105px] h-[25px] text-[25px] max-sm:text-[15px] px-4 max-sm:px-4 py-[1px] rounded-md text-white ${
                      colorByType[type.type.name]
                    }`}
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[30px] font-medium max-sm:text-[20px]">
                Abilities
              </h4>
              <ul className="flex justify-center gap-4 flex-wrap">
                {pokemonInfo?.abilities.map((ability) => (
                  <li
                    key={ability.ability.name}
                    className="capitalize rounded-md text-[25px] max-sm:text-[15px] border-0 px-14 max-sm:px-4 py-[1px] max-sm:py-[1px] h-[25px] max-sm:h-7 dark:border-slate-500"
                  >
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/*3RO*/}
          <section className=" p-2 max-sm:p-2 max-sm:w-full ">
            <div className="flex  items-center gap-1">
              <h4 className="text-[45px] max-sm:text-[25px] font-medium">
                Stats
              </h4>
              <hr className="w-full mt-3" />
            </div>

            <ul className="grid gap-4">
              {pokemonInfo?.stats.map((stat) => (
                <li key={stat.stat.name}>
                  <div className="flex justify-between">
                    <h5 className="uppercase font-medium">
                      {stat.stat.name} :
                    </h5>
                    <span className="font-medium">{stat.base_stat}/255</span>
                  </div>
                  {/*Contenedor de barra de progreso*/}
                  <div className="h-6 bg-slate-200 rounded-sm overflow-hidden">
                    <div
                      style={{
                        width: getPercentBarProgress(stat.base_stat),
                      }}
                      className="h-full bg-gradient-to-r from-orange-400 to-yellow-400"
                    >
                      {/*Progreso / TOTAL */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {/*4TO*/}
        <section className="shadow-[0_0_15px_0_rgba(0,0,0,0.15)] p-20 max-sm:w-full max-sm:p-2 rounded-lg  border-[1px] dark:border-slate-500 mt-10">
          <div className="flex  items-center gap-1">
            <h4 className="text-[45px] max-sm:text-[25px]">Movements</h4>
            <hr className="w-full  mt-3" />
          </div>

          <ul className="flex flex-wrap text-sm  justify-between rounded-lg">
            {pokemonInfo?.moves.map((move) => (
              <li
                key={move.move.name}
                className="bg-[#E5E5E5]  p-2 m-1 rounded-full px-3 dark:bg-slate-800"
              >
                {move.move.name}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};
export default PagePokemonInfo;
