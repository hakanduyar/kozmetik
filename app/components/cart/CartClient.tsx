"use client";

import useCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";

const CartClient = () => {
  const {
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  } = useCart();

  
  if (!cartPrdcts || cartPrdcts.length === 0) {
    return (
      <PageContainer>
        <div className="h-[500px] flex items-center justify-center">
          <div className="text-2xl">Sepetinizde Ürün Bulunmamaktadır...</div>
        </div>
      </PageContainer>
    );
  }

  const cartPrdctsTotal = cartPrdcts.reduce(
    (acc: number, item: CardProductProps) => acc + item.quantity * item.price,
    0
  );

  return (
    <PageContainer>
      <div className="flex flex-col gap-4">
        <div className="text-center text-2xl font-bold">Sepetim</div>
        
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-self-start">Ürün Resmi</div>
          <div className="justify-self-start">Ürün Adı</div>
          <div className="justify-self-start">Ürün Miktarı</div>
          <div className="justify-self-end">Ürün Fiyatı</div>
          <div className="justify-self-end">
            <button 
              onClick={() => removeCart()}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              Sepeti Sil
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {cartPrdcts.map((cart) => (
            <div key={cart.id} className="grid grid-cols-5 text-sm gap-4 items-center border-b py-2">
              <div className="col-span-2 flex gap-2 items-center">
                <Image
                  src={cart.image}
                  alt=""
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="justify-self-start">{cart.name}</div>
              <div className="justify-self-start">
                <Counter
                  increaseFunc={() => addToBasketIncrease(cart)}
                  decreaseFunc={() => addToBasketDecrease(cart)}
                  count={cart.quantity}
                />
              </div>
              <div className="justify-self-end">{cart.price}₺</div>
              <div className="justify-self-end">
                <button
                  onClick={() => removeFromCart(cart)}
                  className="bg-red-500 text-white p-2 rounded-md"
                >
                  <AiFillDelete size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end text-lg font-bold">
          <div>
            Toplam: {cartPrdctsTotal}₺
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CartClient;