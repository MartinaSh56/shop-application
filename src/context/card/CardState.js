import { useReducer } from "react";
import CardContext from "./CardContext";
import CardReducer from "./CardReducer";
import { SHOW_HIDE_CARD, ADD_TO_CARD, REMOVE_ITEM } from "../Types";

const CardState = ({ children }) => {
  const initalState = {
    showCard: false,
    cardItems: [],
  };

  const [state, dispatch] = useReducer(CardReducer, initalState);

  const addToCard = (item) => {
    dispatch({ type: ADD_TO_CARD, payload: item });
  };

  const showHideCard = () => {
    dispatch({ type: SHOW_HIDE_CARD });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CardContext.Provider
      value={{
        showCard: state.showCard,
        cardItems: state.cardItems,
        addToCard,
        showHideCard,
        removeItem,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardState;
