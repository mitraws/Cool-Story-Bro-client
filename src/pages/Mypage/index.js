import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import Container from "react-bootstrap/Container";
import { selectUser } from "../../store/user/selectors";
import Homepage from "../../components/Homepage";
import StoryCarousel from "../../components/StoryCarousel";

export default function Mypage() {
  const { token, homepage, id } = useSelector(selectUser);
  const history = useHistory();

  if (token === null) {
    history.push("/");
  }
  console.log("Token:",token, "homepage:", homepage, "id:", id)

  if (homepage === null) {
    return <Loading />;
  }

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
