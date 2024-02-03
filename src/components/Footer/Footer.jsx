import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
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
              <FiPhoneCall />
            </span>
            <a href="tel:+34658920636">+34 658 92 06 36</a>
          </div>
          <div>
            <span>
              <HiOutlineMailOpen />{" "}
            </span>
            <a href="agustinescalanterojo@gmail.com">
              agustinescalanterojo@gmail.com
            </a>
          </div>
        </div>
        <div className="profile">
          <h1>Check my profile</h1>
          <div className="icons">
            <span>
              <a href="#">
                <AiFillGithub />
              </a>
            </span>
            <span>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </span>
            <span>
              <a href="#">
                <AiOutlineArrowUp />
              </a>
            </span>
            <span>
              <a href="#">
                <BsSlack />
              </a>
            </span>
          </div>
        </div>
        <ArrowUp><AiOutlineArrowUp /></ArrowUp>
      </Profile>
      <Form></Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Profile = styled.div`
  flex: 1;

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;






const ArrowUp = styled.div``;
const Form = styled.div``;
