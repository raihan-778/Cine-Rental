import { useContext, useState } from "react";
import { MovieCartConext } from "../../context";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import { CartDetails } from "./CartDetails";

export const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieCartConext);

  const handleShowCartItems = () => {
    setShowCart(true);
  };

  console.log("Header Cart Data:", cartData.length);

  // setItemToCart(true)
  return (
    <>
      {" "}
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Sun} width="24" height="24" alt="" />
              </a>
            </li>
            <li className="relative">
              <a
                onClick={handleShowCartItems}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
              </a>

              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
