import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const{ cartItems, totalAmount, quantity}=useSelector((state)=>state.cart)
    if(quantity === 0){
        return <h2 className='no-items'>No items in cart</h2>
    }
  return (
    <>
    <div className='cart con'>
        <div className='cart-section'>
            <h1 className='text-center mt-3'>Cart</h1>
            <div className='cart-items'>
                <div className='headings d-flex'>
            <h5 className='f-50'>Product</h5>
            <h5>Quantity</h5>
            <h5>Price</h5>
                </div>
                {cartItems.map((a)=>
                 <div className='cart-item'>
                 <div className='cart-product'>  
                     <div className='cart-info'>
                     <img src={a.url} className=''/>
                     <p>{a.title}</p>
                     </div>
                 </div>
                 <div className='cart-quantity'>
                    <p>{a.quantity}</p>
                 </div>
                 <div className='cart-price'> 
                    <p>{a.price}</p>
                 </div>
                 </div>
                )}  
            </div>
            <p className="text-end">Total Price:{totalAmount}</p>
        </div>
        <div className='checkout-section'></div>
    </div>
    </>
  )
}