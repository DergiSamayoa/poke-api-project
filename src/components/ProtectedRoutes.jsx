import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoutes = () => {
  const trainerName = useSelector((store) => store.trainerName)

  if(trainerName !== "") {
    return <Outlet />
  }else{
    return <Navigate to="/" />
  }
}
export default ProtectedRoutes