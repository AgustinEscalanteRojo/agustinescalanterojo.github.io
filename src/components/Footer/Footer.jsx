import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Profile>
        <h1>Portfolio</h1>
        <div className="links">
          <h1>Contact me directly:</h1>
          <div>
            <span>

            </span>
          </div>
        </div>
      </Profile>
      <Form></Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div``;
const Profile = styled.div``;
const Form = styled.div``;
