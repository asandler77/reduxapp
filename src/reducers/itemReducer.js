const initialState = {
  itemList: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDITEM':
      console.log('ADDITEM' + action.data)
      return {
        ...state,
        itemList: state.itemList.concat({
          key: Math.random(),
          name: action.data,
        }),
      };
    case 'REMOVEITEM':
      return {
        ...state,
        itemList: state.itemList.filter((item) => item.key !== action.key),
      };
    default:
      return state;
  }
};

export default itemReducer;
