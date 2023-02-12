import React from "react";
import "./ButtonComponent.css";
import "./ProductCard.css";
import "./ButtonComponent.js";
import CardContext from "../context/card/CardContext";
import { useContext } from "react";

const ProductCard = ({ listItem }) => {
  const { addToCard } = useContext(CardContext);
  return (
    <div className="productCard__wrapper">
      <div className="content-container-top">
        <div className="productAsset__container">
          <img className="productCard__image" src={listItem.image} alt="" />
        </div>

        <h4>{listItem.title}</h4>
      </div>

      <div className="main-container">
        <div className="price-container">
          <h5>{listItem.price}</h5>
          <h5>$</h5>
        </div>
        <button
          className="button-container"
          onClick={() => addToCard(listItem)}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
