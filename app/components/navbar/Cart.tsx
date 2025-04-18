import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Cart: React.FC = () => {
  return (
    <Link href="/cart">
      <div className="flex flex-col items-center text-gray-700 hover:text-pink-500 relative cursor-pointer text-xs">
        <AiOutlineShoppingCart size={22} className="mb-0.5" />
        <span>Sepetim</span>
        <span className="absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </div>
    </Link>
  );
};

export default Cart;