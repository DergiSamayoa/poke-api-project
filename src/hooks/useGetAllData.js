import { useState } from "react"

const useGetAllData = () => {
  const [data, setData] = useState([])
  return {
    data
  }
}
export default useGetAllData