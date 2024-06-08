import React from 'react'
import '../product.css'
export const Product = ({product,cart,setCart}) => {
  const addCart=() =>{
    setCart([...cart,product])
  };
  const removeCart=() =>{
    setCart(cart.filter((c) => c.id !== product.id))
  };
  return (
    <div className='product'>
        <div className='img'>
            <img src={product.pic}></img>
        </div>
        <div className='details'>
        <h3>{product.name}</h3>
        <p>Price Rs:{product.amnt}</p>
        {cart.includes(product)?<button className="removecart"onClick={removeCart}>Remove from cart</button>:<button onClick={addCart}>Add to Cart</button>}
        </div>
    </div>
  )
}
