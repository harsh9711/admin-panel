"use client";
import ProductRow from "@/components/admin-panel/ProductRow";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "@/components/admin-panel/Popup";

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [open, setOpen] = useState(false);
  const [table, setTable] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("/api/get_products")
      .then((res) => setProducts(res.data))
      .catch((err: any) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  }, [table]);

  return (
    <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4">
      <h2 className="text-3xl">All products</h2>
      <div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-gray-500 border-t border-[#ececec]">
              <th className="text-left p-2">SR No.</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Pictures</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct, index) => (
              <ProductRow
                key={product._id}
                srNo={index + 1}
                setOpenPopup={setOpen}
                setUpdateTable={setTable}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>{" "}
      {open && <Popup setOpenPopup={setOpen} setUpdateTable={setTable} />}
    </div>
  );
};

export default Dashboard;
