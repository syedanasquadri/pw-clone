import { MenuIcon } from "../icons/MenuIcon"
import { PwIcon } from "../icons/PwIcon"

export const Navbar = () => {
    return <div className="flex justify-between">
      <div className="flex">
      <MenuIcon/>
      <PwIcon/>
      </div>
      <div>
      <button className="border solid">Login/Register</button>
      </div>
    </div>
}