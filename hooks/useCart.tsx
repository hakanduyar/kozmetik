"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  addToBasketIncrease: (product: CardProductProps) => void;
  addToBasketDecrease: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
  removeCart: () => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    try {
      let getItem = localStorage.getItem("cart");
      let getItemParse: CardProductProps[] | null = getItem ? JSON.parse(getItem) : null;
      setCartPrdcts(getItemParse);
      
      if (getItemParse) {
        const totalQuantity = getItemParse.reduce((total, item) => total + item.quantity, 0);
        setProductCartQty(totalQuantity);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      localStorage.setItem("cart", JSON.stringify(null));
    }
  }, []);

  const addToBasketIncrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 10) {
        return toast.error("Daha fazla ekleyemezsin...");
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity = ++updatedCart[existingItem]
            .quantity;
          
          const totalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
          setProductCartQty(totalQuantity);
          
          setCartPrdcts(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
      }
    },
    [cartPrdcts]
  );

  const addToBasketDecrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity == 1) {
        return toast.error("Daha az ekleyemezsin...");
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        const existingItem = cartPrdcts.findIndex(
          (item) => item.id === product.id
        );

        if (existingItem > -1) {
          updatedCart[existingItem].quantity = --updatedCart[existingItem]
            .quantity;
          
          const totalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
          setProductCartQty(totalQuantity);
          
          setCartPrdcts(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
      }
    },
    [cartPrdcts]
  );

  const removeCart = useCallback(() => {
    setCartPrdcts(null);
    setProductCartQty(0);
    toast.success("Sepet Temizlendi...");
    localStorage.setItem("cart", JSON.stringify(null));
  }, []);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        
        if (prev) {
          const existingIndex = prev.findIndex(item => item.id === product.id);
          
          if (existingIndex > -1) {
            updatedCart = [...prev];
            if (updatedCart[existingIndex].quantity < 10) {
              updatedCart[existingIndex].quantity += 1;
              toast.success("Ürün miktarı arttırıldı...");
            } else {
              toast.error("Maksimum miktar eklendi (10)...");
              return prev;
            }
          } else {
            updatedCart = [...prev, { ...product, quantity: 1 }];
            toast.success("Ürün Sepete Eklendi...");
          }
        } else {
          updatedCart = [{ ...product, quantity: 1 }];
          toast.success("Ürün Sepete Eklendi...");
        }
        
        const totalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
        setProductCartQty(totalQuantity);
        
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    []
  );

  const removeFromCart = useCallback(
    (product: CardProductProps) => {
      if (cartPrdcts) {
        const filteredProducts = cartPrdcts.filter(
          (cart) => cart.id !== product.id
        );
        
        const totalQuantity = filteredProducts.reduce((total, item) => total + item.quantity, 0);
        setProductCartQty(totalQuantity);
        
        setCartPrdcts(filteredProducts.length > 0 ? filteredProducts : null);
        toast.success("Ürün Sepetten Silindi...");

        localStorage.setItem("cart", JSON.stringify(filteredProducts.length > 0 ? filteredProducts : null));
      }
    },
    [cartPrdcts]
  );

  let value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  };
  
  return <CartContext.Provider value={value} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("useCart hook must be used within a CartContextProvider");
  }
  return context;
};

export default useCart;