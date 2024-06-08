import React, { useEffect, useState } from 'react'
import "./cart.css"
export const Cart = ({cart,setCart}) => {
  const [total,setTotal]=useState(0);
  useEffect(()=> {
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amnt),0));
  },[cart]);
  return (<>
  <div className='cartcontainer'>
  <h1 className='cartheading'>Cart Products</h1>
   {cart.map((product)=>(
     <div className='cartproduct' key={product.id}>
     <img  className='images'src={product.pic}></img>
     <div className='productdetails'><h3>{product.name}</h3>
     <p>Price Rs:{product.amnt}</p>
     </div>
   </div>
   ))}
   
    <h3 className='carttotal'>Total Amount Rs:{total}</h3>
  </div>
    </>
  )
}
