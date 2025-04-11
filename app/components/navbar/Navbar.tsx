import Cart from "./Cart"
import Category from "./Category"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div className="flex  items-center justify-between gap-3 md:gap-10 md:px-10 h-16 bg-pink-500 text-slate-100">
      <Logo/>
      <Category/>
      <Cart/>
      <HamburgerMenu/>
    </div>
  )
}

export default Navbar
