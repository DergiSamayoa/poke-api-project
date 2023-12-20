function BackButton() {
    const goBack = () => {
      window.history.back();
    }; 

    return (
        <div className="flex justify-center items-center h-screen">
          <button onClick={goBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Regresar
          </button>
        </div>
      );
    }

    export default BackButton;  