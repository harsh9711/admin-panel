import { IProduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}
const ProductRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  product,
}: PropsType) => {
  const dispatch = useAppDispatch();
  const onEdit = () => {
    console.log("Editing Product:", product);
    dispatch(setProduct(product));
    setOpenPopup(true);
  };
  const onDelete = () => {
    const payload = {
      fileKey: product.fileKey,
    };
    
    dispatch(setLoading(true)); 
  
    axios
      .delete("/api/uploadthing", { data: payload })
      .then((res) => {
        console.log("File delete response:", res.data); // Log response from uploadthing
        return axios.delete(`/api/delete_product/${product._id}`); // Correct API route
      })
      .then((res) => {
        console.log("Product delete response:", res.data); // Log product delete response
        toast.success("Product deleted successfully");
        setUpdateTable((prevState) => !prevState);
      })
      .catch((err) => {
        console.error("Error during deletion:", err.response ? err.response.data : err); // Improved error logging
        toast.error("Failed to delete product");
      })
      .finally(() => {
        dispatch(setLoading(false)); // Always reset loading state
      });
  };
  
  
  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{product.name}</div>
      </td>
      <td>$ {product.price}</td>
      <td className="py-2">
        <Image
          src={product?.imgSrc}
          width={40}
          height={40}
          alt="product_image"
        />
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="cursor-pointer hover:text-black"
            onClick={onEdit}
          />

          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
