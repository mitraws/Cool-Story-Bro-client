
const initialState = {
  loading: true,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "detail/startLoading": {
      return state;
    }
    case "detail/dataFetched": {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
