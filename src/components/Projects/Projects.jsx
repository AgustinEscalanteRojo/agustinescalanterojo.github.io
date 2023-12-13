import React from "react";

const Projects = () => {
  return (
    <Container>
      <h1>
        Recent <span className="green">Projects"</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        consequuntur aliquid animi provident explicabo autem laudantium deleniti
        obcaecati reiciendis blanditiis excepturi iste fugiat, ipsa dignissimos
        fugit quaerat iure veniam delectus.
      </p>
      <Slide>
        <Slider />
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
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``

