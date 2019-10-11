const reduce = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORETE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    default:
      return state;
  }
};

export default reduce;
