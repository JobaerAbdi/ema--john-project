import React, { useEffect, useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';

const Shop = () => {
    const [products,setProducts] = useState([]);
    // console.log(products);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);


    const handelAddToCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    };

    return (
        <div>
            <div className='flex sm:flex-col lg:flex-row justify-between lg:px-12'>
                <div className='w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 bg-cyan-500'>
                    {
                        products.map(product=> <DisplayProducts
                        key={product.id} 
                        product={product} 
                        handelAddToCart={handelAddToCart}
                        ></DisplayProducts>)
                    }
                </div>
                <div className='w-1/5 bg-cyan-500 mt-6 text-left pl-4 text-white ml-4'>
                    <h1 className='font-bold text-3xl mt-4'>Order Summary :</h1>
                    <h1 className='font-bold mt-2'>Selected Items : {cart.length}</h1>
                    <h1 className='font-bold mt-2'>Total Price :</h1>
                    <h1 className='font-bold mt-2'>Total Shipping Charge :</h1>
                    <h1 className='font-bold mt-2'>Tax :</h1>
                    <h1 className='font-bold mt-4'>Grand Total :</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;