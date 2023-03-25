import React from 'react';

const DisplayProducts = ({product}) => {
    const {img,name} = product;
    console.log(product);
    return (
        <div>
    <div className="card card-compact w-full h-full px-6 py-4 bg-base-100 shadow-xl">
  <figure><img className='p-4' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DisplayProducts;