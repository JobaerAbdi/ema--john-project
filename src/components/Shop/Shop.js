import React, { useEffect, useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';

const Shop = () => {
    const [products,setProducts] = useState([]);
    // console.log(products);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return (
        <div>
            <div className='flex justify-between'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 w-4/5 bg-stone-400'>
                    {
                        products.map(product=> <DisplayProducts
                        key={product.id} product={product}>
                        </DisplayProducts>)
                    }
                </div>
                <div className='w-1/5 bg-orange-500 mt-6'>
                    <h1 className='font-bold text-3xl mt-4'>Order Summary :</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;