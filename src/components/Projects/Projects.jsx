import React from "react";
import SliderComp from "./Slider";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <h1>
        Recent <span className="green">Projects</span>
      </h1>
      <p>Under construction</p>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    font-weight: bold;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
