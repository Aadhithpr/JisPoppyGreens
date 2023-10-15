import React from 'react'
import './Products.css'
import {productData} from '../../Products'
const Products = () => {
  return (
    <div className='products' id='products'>
      <div className="title-p">
        <h2>We Provide</h2>
      </div>
      <div className="productlist">
      {productData.map((program)=>(
                <div key={program.id} className="category">
                    <img src={program.image} alt="productImg" />
                    <p>Name: {program.p_name}</p>
                    <p>Weight: {program.gram} gm</p>
                    </div>
                    ))}
      </div>
                    </div>
  )
}

export default Products
