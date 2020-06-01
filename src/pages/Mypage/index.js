import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import Container from "react-bootstrap/Container";
import { selectUser } from "../../store/user/selectors";
import Homepage from "../../components/Homepage";
import StoryCarousel from "../../components/StoryCarousel";

export default function Mypage() {
  const { token, data, id } = useSelector(selectUser);

  if (data === null) {
    return <Loading />;
  }

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
