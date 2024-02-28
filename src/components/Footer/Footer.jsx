import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import styled from "styled-components";

const Footer = () => {
    const scrollUp = () => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      };
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
              <a href="https://github.com/AgustinEscalanteRojo">
                <AiFillGithub />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/agustinescalanterojo/">
                <AiFillLinkedin />
              </a>
            </span>
          </div>
        </div>
        <ArrowUp onClick={scrollUp}><AiOutlineArrowUp /></ArrowUp>
      </Profile>
      <Form>

      <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <button>Submit</button>
          </form>
      </Form>
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
        color: #196cc6;
        font-weight: bold;
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
          color: #196cc6;
        }
      }
    }
  }
`;

const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #196cc6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  filter: drop-shadow(0px 4px 5px #1427d0);
  border-radius: 10px;
  :hover {
    background-color: #6a96c8;
  }
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;


const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #196cc6;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #1427d0);
      cursor: pointer;
      :hover {
        background-color: #6a96c8;
      }
    }
  }
`;
