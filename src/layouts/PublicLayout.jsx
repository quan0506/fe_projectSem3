import {Outlet} from 'react-router-dom'
import Header from "../components/header/header.jsx";
const PublicLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default PublicLayout
