const initialState = {
  loading: true,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "home/startLoading": {
      return state;
    }
    case "home/dataFetched": {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
