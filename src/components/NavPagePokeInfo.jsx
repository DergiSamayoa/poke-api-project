import BackButton from "./BackButton";

const NavPagePokeInfo = () => {
  return (
    <nav className="h-[150px] w-full relative bg-[#cc0000] bg-contain bg-no-repeat flex justify-center items-center text-black max-lg:h-[90px] ">
      <section className=" w-full  h-[90%] max-lg:h-[75%]  rounded-xl shadow-[0_5px_50px_0_rgba(55,71,79,0.1)] flex gap-6 px-6 max-lg:flex-col max-sm:grid max-sm:grid-cols-2 ">
        
          <img
          className="w-[250px] absolute top-[-20px] left-[calc(50%-125px)]  max-lg:w-[150px] max-lg:top-[-10px] max-lg:left-[calc(50%-75px)] max-sm:h-[90px] flex justify-between "
          src="/images/logo.png"
          alt=""
        />
        <div className="translate-y-[120px] translate-x-[5px] max-sm:translate-y-[50px] max-md:translate-y-[60px] max-lg:translate-y-[50px]">
          <BackButton />
        </div>
        
        

      </section>
      
    </nav>
  );
};
export default NavPagePokeInfo;
