import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SettingsPage = () => {
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
    <>
      <h3>Settings Page</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          Pages per Block:
          <input
            type="number"
            min="1"
            max="100"
            value={pagesPerBlock}
            onChange={(e) => setPagesPerBlock(e.target.value)}
          />
        </label>
        <br />
        <label>
          Pokemons per Page:
          <input
            type="number"
            min="1"
            max="100"
            value={pokemonsPerPage}
            onChange={(e) => setPokemonsPerPage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Display theme:
          <select 
            name="theme"
            value={modeDisplay} 
            onChange={(e) => setModeDisplay(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <br />
        <button 
            onSubmit={handleFormSubmit}
            type="submit"
            className='border-2 rounded-xl bg-blue-600 px-4 py-1'>
          Save
        </button>
      </form>
    </>
  );
};

export default SettingsPage;
