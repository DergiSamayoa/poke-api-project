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
        <ul className="text-lg flex gap-2 justify-center items-center font-semibold mt-10 max-sm:flex-wrap">
            <li>
                <button
                    onClick={handleFirstPage}
                    className="font-bold text-xl flex items-center justify-center border-2 h-8 aspect-square rounded-md bg-red-700 border-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white max-sm:hidden"
                    alt="first page"
                >
                    <i className="ri-arrow-left-double-fill text-white"></i>
                </button>
            </li>
            <li>
                <button
                    onClick={handlePrevPage}
                    className="font-bold text-xl border-2 h-8 aspect-square rounded-md bg-red-700 border-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white "
                    alt="previous block"
                >
                    <i className="ri-skip-left-line text-white"></i>
                </button>
            </li>
            {pagesOnCurrentBlock
                .map((page) => {
                    return (
                        <li key={page}>
                            <button                            
                                onClick={() => setCurrentPage(page)}
                                className={`font-semibold border-[1px] flex items-center justify-center border-red-700 text-xl h-12 aspect-square rounded-md hover:bg-red-700 hover:text-white ${currentPage === page ? "bg-red-700 text-white" : "border-red-700"}`}
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
                    className="font-bold text-xl flex items-center justify-center border-2 h-8 aspect-square rounded-md bg-red-700 border-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white "
                    alt="next block"
                >
                    <i className="ri-skip-right-line text-white"></i>
                </button>
            </li>
            <li>
                <button
                    onClick={handleLastPage}
                    className="font-bold text-xl flex items-center justify-center border-2 h-8 aspect-square rounded-md border-red-700 bg-red-700 text-red-950/70
                            hover:bg-red-700 hover:text-white max-sm:hidden"
                    alt="last page"
                >
                    <i className="ri-arrow-right-double-fill text-white"></i>
                </button>
            </li>
        </ul>
    )
}
export default Pagination