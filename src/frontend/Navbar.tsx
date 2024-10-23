import { useAppSelector } from "@/redux/hooks";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"; // Ensure you have this import
import { BsSearch } from "react-icons/bs"; // Ensure you have this import

interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart }: PropsType) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="bg-white top-0 sticky">
      <div className="container pt-4">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">Logo</div>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              className="border-2 border-accent px-6 py-2 w-full"
              type="text"
              placeholder="Search for products ..."
            />
            <div className="flex items-center">
              <BsSearch className="text-gray-500 text-[32px]" />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex hidden gap-3">
              <div className="rounded-full border-2 border-gray-300 h-[50px] w-[50px] grid place-items-center">
                <AiOutlineUser className="text-gray-500 text-[32px]" />
              </div>
              <div>
                <p className="font-medium">Your Account</p>
                <p className="text-gray-500">Hello, Sign in</p>
              </div>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart className="text-gray-500 text-[32px]" />
              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] text-white text-[14px] grid place-items-center rounded-full">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
