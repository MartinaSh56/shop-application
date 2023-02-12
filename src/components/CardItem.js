import { useContext } from "react";
import "./CardItem.css";
import CardContext from "../context/card/CardContext";
import formatCurrency from "format-currency";

const CardItem = ({ item }) => {
  const { removeItem } = useContext(CardContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <li className='CardItem__item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className='CardItem__button' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
};

export default CardItem;