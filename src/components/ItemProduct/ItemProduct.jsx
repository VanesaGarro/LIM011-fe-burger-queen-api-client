import React, { useState } from 'react';
import './ItemProduct.css';
// import products from '../../containers/products';
import plus from '../../assets/images/plus.svg';
import less from '../../assets/images/less.svg';

const ItemProduct = ({
  name, price, image, id, obj,
}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="card" key={id}>
      <img
        src={image}
        alt="imagen"
        className="item-photo"
      />
      <div className="card-text">
        <span className="card-name">{name}</span>
        <span className="card-text">
          S/.
          {price}
        </span>
      </div>
      <div className="btn-container">
        <img src={less} alt="less" className="btn-plus-less" />
        <input type="text" placeholder="0" className="quantity" value={quantity} />
        <img
          src={plus}
          alt="plus"
          className="btn-plus-less"
          onClick={() => {
            setQuantity(quantity + 1);
            console.log(quantity);
            console.log(obj);
            console.log(id);
          }}
        />
      </div>
      <span />
    </div>
  );
};
export default ItemProduct;
