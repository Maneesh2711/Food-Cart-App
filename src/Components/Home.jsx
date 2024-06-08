import React ,{useState} from 'react'
import data from "../assets/product.json";
import { Product } from './Product';
import './container.css'
export const Home = ({cart,setCart}) => {
    const [products]=useState(data);
  return (
    <div className='container'>
        {products.map((product) =>(
            <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
         ))}
    </div>
  )
}
