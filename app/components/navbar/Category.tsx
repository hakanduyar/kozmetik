import { IoPersonOutline } from "react-icons/io5";
import { PiHeartStraight } from "react-icons/pi";
import Link from "next/link";

const Category: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-5">
      <Link href="/account">
        <div className="flex flex-col items-center text-gray-700 hover:text-pink-500 cursor-pointer text-xs">
          <IoPersonOutline size={20} className="mb-0.5" />
          <span>Hesabım</span>
        </div>
      </Link>

      <Link href="/favorites">
        <div className="flex flex-col items-center text-gray-700 hover:text-pink-500 cursor-pointer text-xs">
          <PiHeartStraight size={20} className="mb-0.5" />
          <span>Favoriler</span>
        </div>
      </Link>
    </div>
  );
};

export default Category;