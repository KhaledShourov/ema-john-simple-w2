import React from 'react';

const ReviewItem = (props) => {
  // console.log(props)
  const {name, quantity, key, price} = props.product;

  const ReviewItemStyle ={
    borderBottom: '1px solid gray',
    marginBottom: '5px',
    paddingBottom: '5px',
    marginLeft: '160px'

  }
  return (
      <div style={ReviewItemStyle} className="review-item">
        <h5 className="text-primary">{name}</h5>
        <h5>Quantity: {quantity}</h5>
        <p><small>${price}</small></p>
        <br />
        <button className="main-btn"
        onClick={()=> props.removeProduct(key)}>Remove Product</button>
      </div>
  );
};

export default ReviewItem;