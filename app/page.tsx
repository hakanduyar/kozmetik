import Banner from "./components/home/Banner";
import Promotions from "./components/home/Promotions";
import NewProducts from "./components/home/NewProducts";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Products/>
      <NewProducts/>
      <Promotions/>
    </div>
  );
}
