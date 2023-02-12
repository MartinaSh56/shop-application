import { SHOW_HIDE_CARD, ADD_TO_CARD, REMOVE_ITEM } from "../Types";

const CardReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CARD: {
      return {
        ...state,
        showCard: !state.showCard,
      };
    }
    case ADD_TO_CARD: {
      return {
        ...state,
        cardItems: [...state.cardItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CardReducer;
