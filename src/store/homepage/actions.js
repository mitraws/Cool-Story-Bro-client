import axios from "axios";
import { apiUrl } from "../../config/constants";



export function startLoading() {
    return {
      type: "home/startLoading"
    };
  }

  export async function fetchData(dispatch, getState) {
    dispatch(startLoading());
    const response = await axios.get(
      `${apiUrl}/homepages`
    );
    dispatch(dataFetched(response.data));
    // console.log("what data is dispatched?", response.data)

  }

  export function dataFetched(data) {
    return {
      type: "home/dataFetched",
      payload: data
      //payload needs to get data from database 
      //and therefore this data is passed as an argument: 
      //moreposts = (moreposts) = response.data.rows (fetched data)
      //the data is then stored in redux by dispatching it.

      //the type is what will be shown in redux as dispatched!!!!!!
    };
  }

