import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../store/detail/actions";
import { selectLoading, selectData } from "../../store/detail/selectors";
import StoryCarousel from "../../components/StoryCarousel";
import Container from "react-bootstrap/Container";

export default function Detail() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);
  const { id } = useParams();

  // console.log("id?", id)
  console.log("detail data?", data);

  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch, id]);

  return (
    <div>
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
          </div>
        );
      })}
      {/* <Container>
        <StoryCarousel homepage={data} />
      </Container> */}
      {/* {data.stories.map((detail) => {
        return (
          <div>
            <h3>{detail.name}</h3>
            <p>{detail.content}</p>
            <img src={detail.imageUrl} alt={detail.name}/>
          </div>
        );
      })} */}
      {data.map((detail) => {
        const destructureStories = detail.stories;
        const { id, name, content, imageUrl } = destructureStories;
        return (
          <div key={destructureStories.id}>
            <h3>{destructureStories.name}</h3>
            <p>{destructureStories.content}</p>
            <img
              src={destructureStories.imageUrl}
              alt={destructureStories.name}
            />
          </div>
        );
      })}
    </div>
  );
}
