const initialState = {
  itemList: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITEM':
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };
    default:
      return state;
  }
};

export default itemReducer;
