import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID, HOMEPAGE_UPDATED } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case HOMEPAGE_UPDATED:
      return {
        ...state,
        homepage: { ...action.payload, stories: state.homepage.stories }
      };

    default:
      return state;
  }
};
