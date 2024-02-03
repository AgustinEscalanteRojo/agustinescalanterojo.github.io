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
            <span><HiOutlineMailOpen />            </span>
                <a href="agustinescalanterojo@gmail.com">agustinescalanterojo@gmail.com</a>
          </div>
        </div>
        <div className="profile">
    <h1>Check my profile</h1>
    <div className="icons">
        <span><a href="#"><AiFillGithub/></a></span>
        <span><a href="#"><AiFillLinkedin/></a></span>
        <span><a href="#"><AiOutlineArrowUp/></a></span>
        <span><a href="#"><BsSlack/></a></span>
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
