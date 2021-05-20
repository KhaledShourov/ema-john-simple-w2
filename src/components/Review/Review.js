import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import HappyImage from '../../images/giphy.gif'

const Review = () => {
  const [cart, setCart]= useState([])
  const [orderPlace, setOrderPlace] =useState(false)

  const handlePlaceOrder =()=>{
    setCart([])
    setOrderPlace(true)
    processOrder()
  }

const removeProduct = (productKey) =>{
  const newCart = cart.filter(pd => pd.key !== productKey)
  setCart(newCart)
  removeFromDatabaseCart(productKey)
}

  useEffect(()=>{
    //Cart
    const savedCard = getDatabaseCart();
    const productKeys = Object.keys(savedCard)

    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key)
      product.quantity=savedCard[key]
     
      return product;
    })
    setCart(cartProducts);
  },[])

  let thankyou;
  if(orderPlace){
    thankyou = <img src={HappyImage} alt="" />
  }


  return (
    <div className="twin-container">
      <div className="product-container">
        {
          cart.map(pd => <ReviewItem
            key = {pd.key}
            removeProduct={removeProduct}
            product={pd}></ReviewItem>)
        }
      
       {
         thankyou
       }

      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;