
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteStory } from "../../store/user/actions";

export default function StoryCarousel(props) {
  const dispatch = useDispatch();

 
  return (
    <Carousel className='mt-5'>
      {props.data.stories.map(detail => {
        return (
          <Carousel.Item key={detail.id}>
            {detail.imageUrl ? (
              <img
                className='d-block w-100'
                src={detail.imageUrl}
                alt={detail.name}
              />
            ) : null}
            <Carousel.Caption
              style={{
                backgroundColor: `${props.data.backgroundColor}99`,
                color: props.data.color
              }}
              className='p-5'
            >
              <h3>{detail.name}</h3>
              <p>{detail.content}</p>

            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}