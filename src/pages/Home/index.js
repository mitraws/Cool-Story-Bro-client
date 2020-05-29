import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/database/actions";
import { selectLoading, selectData } from "../../store/database/selectors";

export default function Index() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {data.map(homepages => {
          return (
              <div>
                  {homepages.title}
              </div>
          )
      })}
    </div>
  );
}
