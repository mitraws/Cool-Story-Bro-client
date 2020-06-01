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
  const data = useSelector(selectData);
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
        id={data.id}
        title={data.title}
        description={data.description}
        backgroundColor={data.backgroundColor}
        color={data.color}
        showLink={false}
      />
      <Container>
        <StoryCarousel data={data} />
      </Container>
    </>
  )
}
