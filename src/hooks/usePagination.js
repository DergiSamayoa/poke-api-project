import { useEffect, useState } from "react"

const usePagination = (data = [], itemsInPage = 10) => {
    const blockSize = localStorage.getItem("POKEMONS_PAGES_PER_BLOCK");
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [currentDisplay, setCurrentDisplay] = useState([])
    const currentBlock = Math.ceil(currentPage / blockSize);

    useEffect(() => { //cada vez que cambie la data o la pagina actual
        const itemsPerPage = itemsInPage

        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage

        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)  //items actuales que se mostraran
        setCurrentDisplay(currentItems)

        const pages = Math.ceil(data.length / itemsPerPage)  //paginas totales
        setTotalPages(pages)
    }, [data, currentPage, itemsInPage])

    const nextPage = () => {
        if (currentPage >= totalPages) return
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if (currentPage <= 1) return
        setCurrentPage(currentPage - 1)
    }

    const pagesOnCurrentBlock = [];
    const maxPage = currentBlock * blockSize;
    const minPage = maxPage - blockSize + 1;
    for (let i = minPage; i <= maxPage; i++) {
        if (i <= totalPages && i > 0) {
            pagesOnCurrentBlock.push(i);
        }
        console.log(pagesOnCurrentBlock)
    }

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        nextPage,
        prevPage,
        currentDisplay,
        pagesOnCurrentBlock
    }
}
export default usePagination