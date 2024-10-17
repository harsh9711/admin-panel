import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
interface PropsType {
    setOpenPopup:Dispatch<SetStateAction<boolean>>;
    setUpdateTable:Dispatch<SetStateAction<boolean>>;
}

const Popup = ({setOpenPopup,setUpdateTable}:PropsType) => {
    const productData=useAppSelector((state)=>state.productReducer)
    const dispatch=useAppDispatch();
    const [inputData,setInputData]=useState({
        name:productData.name,
        category:productData.category,
        price:productData.price,
    })
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        dispatch(setLoading(true))
    }
  return (
    <div>Popup</div>
  )
}

export default Popup