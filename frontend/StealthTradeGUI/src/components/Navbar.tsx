import logo from "../assets/logo.svg"
import clan from "../assets/clan.svg"
import create from "../assets/create.svg"
import orders from "../assets/offer.svg"
import settings from "../assets/setting.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-slate-100 bg-opacity-75 w-screen flex flex-wrap justify-between">
        <img src={logo} width="262" height="33" className="pl-10" />
        <div className="flex justify-around">
        <Link to="/clans" >
          <img src={clan}/>
        </Link>
        <Link to="/create" className="px-10">
          <img src={create}/>
        </Link>       
        <Link to="/orders" className="px10">
          <img src={orders}/>
        </Link>
        <Link to="/settings" className="px-10">
          <img src={settings}/>
        </Link>
        </div>
    </div>
  )
}

export default Navbar
