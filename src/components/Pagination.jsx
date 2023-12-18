const Pagination = ({lastPage, pagesOnCurrentBlock, setCurrentPage, currentPage}) => {
    console.log("on pagination:", lastPage, pagesOnCurrentBlock)
  return (
    <ul className="pb-4 text-lg flex gap-2 justify-center font-semibold mt-10">
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
    </ul>
  )
}
export default Pagination