import { useAppSelector } from "@/redux/hooks"; // Ensure this is the correct import
import { RxCross1 } from "react-icons/rx"; // Ensure you have this import
import CartProduct from "./CartProduct";

const Cart = ({ setShowCart }: any) => {
  const products = useAppSelector((state) => state.cartReducer);

  const getTotal = () => {
    let total = 0;
    products.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium">Your Cart</h3>
        <div className="mt-6 space-y-2">
          {products?.map((item: any) => (
            <CartProduct
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="flex justify-between items-center font-medium text-xl py-4">
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>
        <button className="hover:bg-accent mb-4 mt-4 w-full bg-black text-white rounded-3xl py-2">
          View Cart
        </button>
        <button className="hover:bg-accent w-full bg-black text-white rounded-3xl py-2">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
