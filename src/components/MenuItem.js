import React from 'react';

const MenuItem = (props) => {
  return (
    <div className="max-w-sm rounded-t-xl px-2">
      <div className="w-100 p-2 m-2">
        <img src={props.image} alt="" />
      </div>
      <div className="">
        <h2 className="font-medium text-bg-light"> {props.title} </h2>
        <h2 className="font-medium text-bg-light"> £{props.price} </h2>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default MenuItem;
