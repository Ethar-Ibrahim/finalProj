import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from '@heroui/react';

export default function CartProduct({product,removeSpecificItem,updateProductCount}) {
    
    const [isLoading, setIsLoading] = useState(false)
    const [IncrementIsLoading, setIncrementIsLoading] = useState(false)
    const [DecrementIsLoading, setDecrementIsLoading] = useState(false)
    const [productCount, setproductCount] = useState(product.count)
    useEffect(()=>{
        setproductCount(product.count)
    },[product.count])


    return (
        <>
        <div className="justify-between items-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={product.product.imageCover}alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">{product.product.title}</h2>
                <p className="mt-1 text-xs text-gray-700">${product.price}</p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-stretch border-gray-100">
                <Button isLoading={DecrementIsLoading} onPress={()=>updateProductCount(product.product._id,product.count-1,setIncrementIsLoading,setDecrementIsLoading,product.count)} className="cursor-pointer rounded-none bg-gray-100 min-w-0 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </Button>
                
                <input class="w-8 border bg-white text-center text-xs outline-none" type="number" value={productCount} min="1" onChange={(e)=>setproductCount(e.target.value)} onBlur={(e)=>updateProductCount(product.product._id,e.target.value,setIncrementIsLoading,setDecrementIsLoading,product.count)} />

                <Button isLoading={IncrementIsLoading} onPress={()=>updateProductCount(product.product._id,product.count+1,setIncrementIsLoading,setDecrementIsLoading,product.count)} className="cursor-pointer rounded-none bg-gray-100 min-w-0 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </Button>
                </div>
                <div className="flex items-center space-x-4">
                <p className="text-sm">${product.count * product.price}</p>
                <Button isLoading={isLoading} className='bg-transparent' onPress={()=>removeSpecificItem(product.product._id,setIsLoading)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </Button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
