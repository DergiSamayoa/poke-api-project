function BackButton() {
    const goBack = () => {
      window.history.back();
    }; 

    return (
        <div>
          <button onClick={goBack} className=" translate-y-[40px] translate-x-[-20px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded max-sm:w-[65px] max-sm:text-[9px] ">
            Regresar
          </button>
        </div>
      );
    }

    export default BackButton;  