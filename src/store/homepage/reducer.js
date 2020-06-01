const initialState = {
  loading: true,
   data:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "home/startLoading": {
      return state;
    }
    case "home/dataFetched": {
      return {
        loading: false,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

// rose's reducer for homepage
// const initialState = {
//   loading: false,
//   homepages: [],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "START_LOADING": {
//       return {
//         ...state,
//         loading: true,
//       };
//     }
//     case "HOMEPAGE_FETCHED": {
//       return {
//         loading: false,
//         homepages: action.payload,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };
