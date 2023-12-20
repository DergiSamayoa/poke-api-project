import BackButton from "./BackButton";

const NavPagePokeInfo = () => {
  return (
    <nav className="h-[150px] w-full bg-[#CC0000] bg-contain bg-no-repeat flex justify-center items-center text-black max-lg:h-[90px] max-sm:min-w-full">
      <section className="relative w-[50%] max-w-full max-lg:w-[95%] h-[90%] max-lg:h-[75%]  rounded-xl flex gap-6 items-center justify-end px-6 max-lg:flex-col">
        <img
          className="w-[250px] absolute top-[-5px] left-[calc(50%-125px)] max-lg:w-[150px] max-lg:top-[-10px] max-lg:left-[calc(50%-75px)] max-sm:h-[90px] "
          src="/images/logo.png"
          alt=""
        />
        <BackButton />

      </section>
      
    </nav>
  );
};
export default NavPagePokeInfo;
