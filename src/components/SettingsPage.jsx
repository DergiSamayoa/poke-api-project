import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SettingsPage = ({ setShowSettings }) => {
  const [pagesPerBlock, setPagesPerBlock] = useState(localStorage.getItem('POKEMONS_PAGES_PER_BLOCK'));
  const [pokemonsPerPage, setPokemonsPerPage] = useState(localStorage.getItem('POKEMONS_PER_PAGE'));
  const [modeDisplay, setModeDisplay] = useState(localStorage.getItem('POKEMONS_MODE_DISPLAY'));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('POKEMONS_PAGES_PER_BLOCK', pagesPerBlock);
    localStorage.setItem('POKEMONS_PER_PAGE', pokemonsPerPage);
    localStorage.setItem('POKEMONS_MODE_DISPLAY', modeDisplay ? "Dark" : "Light");
    <Navigate to="/" />
  };

  return (
    <section className='z-10 absolute w-[210px] h-[330px] bottom-[-230px] bg-white flex flex-col items-center justify-between shadow-xl p-4 rounded-lg border-[1px] max-lg:top-8 max-lg:right-5'>
      <h3 className='text-2xl'>Settings</h3>
      <div onClick={() => setShowSettings(false)} className='select-none absolute -top-7 -right-4 text-white flex items-center justify-center p-4 bg-[#cc0000] h-[25px] w-[25px] rounded-full text-[20px]'>
      <i className="ri-close-fill "></i>
      </div>
      <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 items-center'>
        <label>
          Pages per Block:
          <input
            type="number"
            min="1"
            max="100"
            value={pagesPerBlock}
            onChange={(e) => setPagesPerBlock(e.target.value)}
            className='border-2 rounded-lg shadow-md px-4 py-1 outline-none'
          />
        </label>
        <label>
          Pokemons per Page:
          <input
            type="number"
            min="1"
            max="100"
            value={pokemonsPerPage}
            onChange={(e) => setPokemonsPerPage(e.target.value)}
            className='border-2 rounded-lg shadow-md px-4 py-1 outline-none'
          />
        </label>
        <label>
          Display theme:
          <select 
          className='border-2 rounded-lg shadow-lg px-4 py-1 outline-none'
            name="theme"
            value={modeDisplay} 
            onChange={(e) => setModeDisplay(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <button 
            onSubmit={handleFormSubmit}
            type="submit"
            className='rounded-lg bg-blue-600 px-4 py-1 text-white'>
          Save
        </button>
      </form>
    </section>
  );
};

export default SettingsPage;
