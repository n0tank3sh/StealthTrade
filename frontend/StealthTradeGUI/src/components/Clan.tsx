
import axios from "axios"
import logo from "../assets/logo.svg"
const Clan = () => {
  const imageURL = axios.get(${BACKEND_URL})
  return (
    <div className="flex items-center drop-shadow backdrop-blur-md opacity-95 justify-center font-mono h-screen w-full">
    <div className="w-[592px] h-[576px] bg-white rounded-[73px]">
    <img src={logo} className="px-10 pt-10"/>
    <img src={imageURL} className="rounded-full"/>
    </div>
    </div>
  )
}

export default Clan
