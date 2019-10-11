const reduce = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORETE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORETE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
};

export default reduce;
