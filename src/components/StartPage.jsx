const StartPage = () => {
  return (
    <article className="flex justify-center items-center w-full h-screen bg-[url(/images/background.jpeg)] bg-cover bg-center px-6 overflow-hidden max-sm:py-16">
      <section className="relative flex gap-16 flex-col justify-center items-center bg-blue-300/30 backdrop-blur-sm w-[1000px] h-[600px] border-[14px] border-[#37474f] rounded-[50px] max-sm:h-full max-sm:px-4 max-sm:gap-8 max-sm:pt-12 max-sm:pb-44">
        <img className="absolute top-[-170px] h-[300px] max-sm:h-[150px] max-sm:top-[-90px]" src="/images/logo.png" alt="logo" />
        <img className="absolute w-[400px] right-[-207px] bottom-[-20px] max-sm:w-[200px] max-sm:right-[-100px]" src="/images/pokeball.png" alt="pokeball" />
        <h2 className="text-5xl font-semibold text-center max-sm:text-2xl">Hola Entrenador Pokemón!</h2>
        <input className="w-[500px] h-[70px] bg-transparent rounded-[17px] border-4 border-[#37474f] text-xl text-center placeholder:text-black outline-none max-lg:w-[400px] max-md:w-[250px] max-md:text-sm max-md:h-[55px]" name="name" type="text" placeholder="Ingresa tu nombre para empezar" autoComplete="off"/>
        <button className="w-[240px] h-[55px] bg-[#cc0000] font-semibold rounded-[17px] hover:bg-[#880000] shadow-[0_5px_5px_0_rgba(55,71,79,0.5),0_1px_10px_0_rgba(0,0,0,0.12),0_2px_4px_-1px_rgba(0,0,0,0.2)] max-sm:w-[200px] max-sm:h-[45px] ">Empezar</button>
      </section>
    </article>
  )
}
export default StartPage