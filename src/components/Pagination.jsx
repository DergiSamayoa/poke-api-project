const Pagination = ({lastPage, pagesOnCurrentBlock}) => {
    console.log(lastPage, pagesOnCurrentBlock)
  return (
    <ul>
        {pagesOnCurrentBlock
            .map((page) => {
                return (
                    <li key={page}>
                        <button>{page}</button>
                    </li>
                )
            })
        }  
    </ul>
  )
}
export default Pagination