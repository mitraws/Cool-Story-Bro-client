import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/database/actions";
import { selectLoading, selectData } from "../../store/database/selectors";
import { Link } from "react-router-dom";


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
              <div key={homepages.id}>
                  <li style={{color:homepages.color, backgroundColor:homepages.backgroundColor}}>
                      {homepages.title}{" "} 
                      <Link to={`/homepages/${homepages.id}`}>
                            <button>
                            Visit Page
                            </button>
                        </Link>
                  </li>
              </div>
          )
      })}
    </div>
  );
}
