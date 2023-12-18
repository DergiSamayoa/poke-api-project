const paginatePokemons = (pokemons, currentPage) => {
    const pageSize = localStorage.getItem("POKEMONS_PER_PAGE");
    const blockSize = localStorage.getItem("POKEMONS_PAGES_PER_BLOCK");
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pokemonsOnCurrentPage = pokemons.slice(startIndex, endIndex);

    const numberOfPages = Math.ceil(pokemons.length / pageSize);
    const currentBlock = Math.ceil(currentPage / blockSize);

    const pagesOnCurrentBlock = [];
    const maxPage = currentBlock * blockSize;
    const minPage = maxPage - blockSize + 1;
    for (let i = minPage; i <= maxPage; i++) {
        if (i <= numberOfPages) {
            pagesOnCurrentBlock.push(i);
        }
    }
    
    return { 
        pokemonsOnCurrentPage, 
        pagesOnCurrentBlock, 
        numberOfPages
     };
}

export { paginatePokemons }
