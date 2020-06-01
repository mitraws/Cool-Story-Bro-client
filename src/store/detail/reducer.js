
const initialState = {
  stories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "detail/dataFetched": {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}

// [state, ]
// rose's reducer :)
// const initialState = {
//   stories: [],
// };

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "HOMEPAGE_DETAILS_FETCHED": {
//       return { ...state, ...payload };
//     }
//     default:
//       return state;
//   }
// };
