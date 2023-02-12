import { useContext } from "react";
import "./Card.css";
import CardContext from "../context/card/CardContext";
import formatCurrency from "format-currency";
import CardItem from "./CardItem";

const Card = () => {
  const { showCard, cardItems, showHideCard } = useContext(CardContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <>
      {showCard && (
        <div className='card__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCard}
            ></i>
          </div>
          <div className='card__innerWrapper'>
            {cardItems.length === 0 ? (
              <h4>Card is Empty</h4>
            ) : (
              <ul>
                {cardItems.map((item) => (
                  <CardItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Card__cartTotal'>
            <div>Card Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cardItems.reduce((amount, item) => item.price + amount, 0),
                opts
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
