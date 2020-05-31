import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/homepage/actions";
import { selectLoading, selectData } from "../../store/homepage/selectors";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Homepage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1>Homepages</h1>
      </Jumbotron>
      <Container>
        {loading ? <p>Loading...</p> : null}
        {data.map((homepage) => {
          return (
            <div
              style={{
                color: homepage.color,
                backgroundColor: homepage.backgroundColor,
              }}
              key={homepage.id}
            >
              <h1>{homepage.title} </h1>
              <p>{homepage.description}</p>
              <Link to={`/homepages/${homepage.id}`}>
                <button>Visit Page</button>
              </Link>
            </div>
          );
        })}
      </Container>
    </>
  );
}
