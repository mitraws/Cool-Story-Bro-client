import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/homepage/actions";
import { selectLoading, selectData } from "../../store/homepage/selectors";
import Container from "react-bootstrap/Container";
import Homepage from "../../components/Homepage";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function HomePage() {
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
            <Homepage
              key={homepage.id}
              id={homepage.id}
              title={homepage.title} 
              description={homepage.description}
              backgroundColor={homepage.backgroundColor}
              color={homepage.color}
              showLink={true}                />
          );
        })}
      </Container>
    </>
  );
}
