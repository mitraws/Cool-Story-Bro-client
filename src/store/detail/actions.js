import axios from "axios";
import { apiUrl } from "../../config/constants";

// export function startLoading() {
//     return {
//       type: "detail/startLoading"
//     };
//   }

  export function fetchData(id) {
  return async function (dispatch, getState) {
    // dispatch(startLoading());
    const response = await axios.get(
      `${apiUrl}/homepages/${id}`
    );
    // console.log("what data is dispatched?", response.data.homepage.stories)

    dispatch(dataFetched(response.data.homepage));
    // console.log("what data is dispatched?", response.data.homepage)

  }}

  export function dataFetched(data) {
    return {
      type: "detail/dataFetched",
      payload: data
      //payload needs to get data from database 
      //and therefore this data is passed as an argument: 
      //moreposts = (moreposts) = response.data.rows (fetched data)
      //the data is then stored in redux by dispatching it.

      //the type is what will be shown in redux as dispatched!!!!!!
    };
  }

  ///
