import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const ProfComponent = () => {
  return (
    <Container>
      <Texts>
        <h4>
          Hola <span className="green">Soy</span>
        </h4>
        <h1 className="green">Agustín Escalante</h1>
        <h3>Desarrollador full stack</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          iusto. Adipisci in qui officia provident tenetur sequi, deserunt
          corporis quos?
        </p>
        <button>Contáctame</button>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="/">
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="/">
                <FaGithub />
              </a>
            </span>
          </div>
        </Social>
      </Texts>
        <Profile>
          <img
            src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
            alt="profile"
          />
        </Profile>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div``;

const Texts = styled.div``;

const Social = styled.div``;

const Profile = styled.div``;
