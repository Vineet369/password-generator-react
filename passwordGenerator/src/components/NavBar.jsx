
import { IoFingerPrintSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center rounded-b-lg justify-between py-2 bg-orange-900">
        <div className="flex flex-shrink-0 items-center ">
        <IoFingerPrintSharp size={50} className="mx-8 text-orange-400" /> 
        </div> 
        
       
    </nav>
  )
}

export default NavBar
