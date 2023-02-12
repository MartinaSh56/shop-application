import React from "react";
import "./Navbar.css";
import "../../src/typography.css";
import { useContext } from "react";
import CardContext from "../context/card/CardContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart }from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
     const { cardItems, showHideCard } = useContext(CardContext);
     console.log(cardItems);
     console.log(showHideCard);
     console.log("bvasuicfehsdiofvfodfvjidfjvid");
  return (
    <div className="main-nav-container">
      <div className="nav-container">
        <h3>Store</h3>
         <div className='card__icon'>
          <FontAwesomeIcon icon={faShoppingCart} onClick={showHideCard}/>
          {cardItems.length > 0 && (
            <div className='item__count'>
              <span>{cardItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
