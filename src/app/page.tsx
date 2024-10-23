"use client"
import Cart from "@/frontend/Cart";
import Navbar from "@/frontend/Navbar";
import React, { useState } from "react";

const page = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
    </div>
  );
};

export default page;
