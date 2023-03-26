import React from 'react';

const DisplayProducts = ({product,handelAddToCart}) => {
    const {img,name,price,shipping} = product;
    return (
    <div>
      <div className="card card-compact w-full h-full px-6 py-4 bg-base-100 shadow-xl">
        <figure><img className='p-4' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : ${price}</p>
          <p>Shipping Charge : ${shipping}</p> 
          <div className="card-actions justify-center">
            <button onClick={()=>handelAddToCart(product)} className="btn btn-warning">Add To Cart</button>
          </div>
        </div>
    </div>
   </div>
    );
};

export default DisplayProducts;