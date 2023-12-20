import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import variants from '../utils/variants';

let { hidden, visible, exit, transition } = variants.bounce;

const SettingsPage = ({ setShowSettings }) => {
  const [pagesPerBlock, setPagesPerBlock] = useState(localStorage.getItem('POKEMONS_PAGES_PER_BLOCK') || 6);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(localStorage.getItem('POKEMONS_PER_PAGE') || 20);
  const [modeDisplay, setModeDisplay] = useState(localStorage.getItem('POKEMONS_MODE_DISPLAY') || 'light');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('POKEMONS_PAGES_PER_BLOCK', pagesPerBlock);
    localStorage.setItem('POKEMONS_PER_PAGE', pokemonsPerPage);
    localStorage.setItem('POKEMONS_MODE_DISPLAY', modeDisplay);
    <Navigate to="/" />
    window.location.reload();
  };


  return (
    <motion.section initial={hidden} animate={visible} exit={exit} transition={transition} className='z-30 absolute w-[210px] h-[330px] bottom-[-230px] bg-white flex flex-col items-center justify-between shadow-xl p-4 rounded-lg border-[1px] max-lg:top-8 max-lg:right-5 dark:bg-slate-700 dark:text-white dark:border-slate-500'>
      <h3 className='text-2xl'>Settings</h3>
      <div onClick={() => setShowSettings(false)} className='select-none absolute -top-8 -right-5 text-white flex items-center justify-center p-4 bg-[#cc0000] h-[25px] w-[25px] rounded-full text-[20px]'>
      <i className="ri-close-fill "></i>
      </div>
      <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 items-center w-full'>
        <label>
          Pages per Block:
          <input
            type="number"
            min="1"
            max="100"            
            name='pagesPerBlock'
            value={pagesPerBlock}            
            onChange={(e) => setPagesPerBlock(e.target.value)}
            className='w-full border-2 rounded-lg shadow-md px-4 py-1 outline-none dark:border-slate-600 dark:bg-slate-700'
          />
        </label>
        <label>
          Pokemons per Page:
          <input
            type="number"
            min="1"
            max="100"
            name='pokemonsPerPage'
            value={pokemonsPerPage}
            onChange={(e) => setPokemonsPerPage(e.target.value)}
            className='w-full border-2 rounded-lg shadow-md px-4 py-1 outline-none dark:border-slate-600 dark:bg-slate-700'
          />
        </label>
        <label>
          Display theme:
          <select 
          className='bg-white w-full border-2 rounded-lg shadow-lg px-4 py-1 outline-none dark:border-slate-600 dark:bg-slate-700'
            name="theme"
            value={modeDisplay} 
            onChange={(e) => setModeDisplay(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <button
            type="submit"
            className='rounded-lg bg-blue-600 px-4 py-1 text-white'>
          Save
        </button>
      </form>
    </motion.section>
  );
};

export default SettingsPage;
