"use client";
import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setLoading } from "@/redux/features/loadingSlice";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { UploadButton } from "@uploadthing/react";

interface IPayload {
  imgSrc: string | null;
  fileKey: string | null;
  name: string;
  category: string;
  price: string;
}
interface UploadResponse {
  [key: string]: any;
  url: string;
  key: string;
}
const ProductForm: React.FC = () => {
  const [payload, setPayload] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios
      .post("/api/add_product", payload)
      .then((res) => {
        toast.success("Product added successfully!");
        setPayload({
          imgSrc: null,
          fileKey: null,
          name: "",
          category: "",
          price: "",
        });
      })
      .catch((err) => {
        toast.error("Failed to add product!");
        console.error(err);
      })
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <Image
        className="max-h-[300px] w-auto object-contain rounded-md"
        src={payload.imgSrc || "/placeholder.jpg"}
        width={800}
        height={500}
        alt="product_image"
      />
   <UploadButton<UploadResponse,any>
    
  endpoint="imageUploader"
  onClientUploadComplete={(res) => {
    console.log('Upload response:', res);

    if (res && res[0]) {
      setPayload({
        ...payload,
        imgSrc: res[0].url,
        fileKey: res[0].key,
      });
    }
  }}
  onUploadError={(error: Error) => {
    toast.error("Image upload failed!");
    console.error(`ERROR! ${error.message}`);
  }}
/>

      <div>
        <label className="block ml-1">Product Name</label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border"
          type="text"
          value={payload.name}
          onChange={(e) => setPayload({ ...payload, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block ml-1">Product Category</label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border"
          type="text"
          value={payload.category}
          onChange={(e) => setPayload({ ...payload, category: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block ml-1">Product Price</label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border"
          type="text"
          value={payload.price}
          onChange={(e) => setPayload({ ...payload, price: e.target.value })}
          required
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
