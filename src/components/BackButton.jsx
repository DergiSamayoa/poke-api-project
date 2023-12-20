function BackButton() {
    const goBack = () => {
      window.history.back();
    }; 

    return (
        // <div className="h-screen">
          <button onClick={goBack} className="hover:bg-blue-700 hover:font-bold text-[#ffcb05] px-1 aspect-square rounded w-25 border-2 border-[#ffcb05] bg-[#306cb4] absolute -right-[calc(100%-250px)] max-sm:right-[20px] max-lg:right-[calc(50%-250px)] top-[25px] z-50">
            <i className="ri-close-fill "></i>
          </button>
        // </div>
      );
    }

    export default BackButton;  