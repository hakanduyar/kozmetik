import Kategori from "../home/Kategori"
import Cart from "./Cart"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div className="flex flex-col bg-pink-500 text-slate-100">
    <div className="flex items-center justify-between gap-3 md:gap-10 md:px-10 h-16">
      <Logo />
      <Cart />
      <HamburgerMenu />
    </div>
    <div className="w-full md:px-10 pb-1">
      <Kategori />
    </div>
  </div>
  )
}

export default Navbar
