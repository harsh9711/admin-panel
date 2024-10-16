    "use client"
    import { setLoading } from "@/redux/features/loadingSlice";
    import { useAppDispatch } from "@/redux/hooks";
    import React, { useEffect, useState } from "react";
    export interface IProduct {
    _id: string;
    imgSrc: string;
    filekey: string;
    name: string;
    price: string;
    category: string;
    }
    const Dashobard = () => {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [table, setTable] = useState(false);
    const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(setLoading(true));
    //     axios
    //     .get('/api/get_products')
    //     .then((res)=>setProducts(res.data))
    //     .catch((err)=>console.log(err))
    //     .finally(()=>dispatch(setLoading(false)));
    // }, [setTable]);
    return <div> Dashboard</div>;
    };

    export default Dashobard;
