import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Homepage from "../../components/Homepage";
import StoryCarousel from "../../components/StoryCarousel";
import Container from "react-bootstrap/Container";
import { fetchData } from "../../store/detail/actions";
import { selectData } from "../../store/detail/selectors";

export default function Detail() {
  const dispatch = useDispatch();
  const homepage = useSelector(selectData);
  const { id } = useParams();

  // console.log("id?", id)
  // console.log("detail data?????", data);
  // console.log("whats story??", data.stories);
  

  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch, id]);

  return (
    <>
      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
        showLink={false}
      />
      <Container>
        <StoryCarousel homepage={homepage} />
      </Container>
    </>
  )
}
