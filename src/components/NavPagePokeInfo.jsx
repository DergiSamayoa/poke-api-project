import BackButton from "./BackButton";

const NavPagePokeInfo = () => {
  return (
    <nav className="h-[150px] w-full bg-[#CC0000] bg-no-repeat pt-3 text-black max-lg:h-[90px] ">
      <section className="relative w-[50%] max-w-full max-lg:w-[95%] h-[90%] max-lg:h-[75%]  max-lg:flex-col">
        <img
          className="w-[250px] absolute top-[-5px] left-[calc(100%-125px)] max-lg:w-[150px] max-lg:top-[-10px] max-lg:left-[calc(55%-75px)] max-sm:h-[90px] "
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
