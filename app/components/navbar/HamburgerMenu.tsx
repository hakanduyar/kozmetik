import { RxHamburgerMenu } from "react-icons/rx";

interface HamburgerMenuProps {
  onClick?: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <div className="relative flex md:hidden mr-2 p-1" onClick={onClick}>
      <RxHamburgerMenu size={25} className="text-gray-700 hover:text-pink-500" />
    </div>
  );
};

export default HamburgerMenu;