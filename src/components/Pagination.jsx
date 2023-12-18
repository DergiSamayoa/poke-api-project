const Pagination = ({
        lastPage, 
        pagesOnCurrentBlock, 
        setCurrentPage, 
        currentPage
    }) => {
    const handleLastPage = () => {
        setCurrentPage(lastPage)
    }
    const handleFirstPage = () => {
        setCurrentPage(1)
    }
    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    return (
        <ul className="pb-4 text-lg flex gap-2 justify-center font-semibold mt-10">
            <li>
                <button
                    onClick={handleFirstPage}
                    className="font-bold text-xl border-4 h-12 aspect-square rounded-full border-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white "
                    alt="first page"
                >
                    {"|<"}
                </button>
            </li>
            <li>
                <button
                    onClick={handlePrevPage}
                    className="font-bold text-xl border-4 h-12 aspect-square rounded-full border-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white "
                    alt="previous block"
                >
                    {"<"}
                </button>
            </li>
            {pagesOnCurrentBlock
                .map((page) => {
                    return (
                        <li key={page}>
                            <button                            
                                onClick={() => setCurrentPage(page)}
                                className={`"font-bold text-xl border-4 h-12 aspect-square rounded-full 
                                        hover:bg-red-700 hover:text-white " 
                                    ${currentPage === page 
                                        ? "bg-red-900 text-white"
                                        : "border-red-700 text-red-950/70"}`}
                            >
                                {page}
                            </button>
                        </li>
                    )
                })
            }  
            <li>
                <button
                    onClick={handleNextPage}
                    className="font-bold text-xl border-4 h-12 aspect-square rounded-full border-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white "
                    alt="next block"
                >
                    {">"}
                </button>
            </li>
            <li>
                <button
                    onClick={handleLastPage}
                    className="font-bold text-xl border-4 h-12 aspect-square rounded-full border-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white "
                    alt="last page"
                >
                    {">|"}
                </button>
            </li>
        </ul>
    )
}
export default Pagination