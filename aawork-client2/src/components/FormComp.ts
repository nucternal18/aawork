import styled from 'styled-components';
import img from '../assets/img/frontbackground.jpg';

const BodyImg = styled.div`
  background-image: url(${img});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 100vh;
  background-size: cover;
  scroll-behavior: smooth;
`;

const Body = styled.div`
  width: 360px;
  height: 580px;
  padding: 80px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin-bottom: 60px;
`;

const SignBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  padding: 80px 0;
  background-image: linear-gradient(120deg, #3498db, #ebf7ff);
`;

const LoginForm = styled.form`
  width: 360px;
  height: 580px;
  padding: 40px 40px;
  border-radius: 10px;
  position: absolute;
`;
const LoginFormH1 = styled.h1`
  text-align: center;
  margin-bottom: 60px;
`;

const SigninForm = styled.form`
  width: 360px;
  margin-top: 100px;
  margin: 0 auto;

  background: #f1f1f1;
  height: auto;
  padding: 40px 40px;
  border-radius: 10px;
  position: relative;
`;
const SigninFormH1 = styled.h1`
  text-align: center;
  margin-bottom: 60px;
`;

const LogButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background: linear-gradient(1600deg, #3498db, #ebf7ff);
  background-size: 200%;
  color: rgb(0, 0, 0);
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-position: right;
  }
`;

const TxtBox = styled.div`
  border-bottom: 2px solid #3498db;
  position: relative;
  margin: 30px 0;
`;

const TxtbInput = styled.input`
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px;
  &:before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.5s;
  }

  &:after {
    top: 100%;
    left: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(120deg, #3498db, #46db52);
    transition: 0.5s;
  }

  &:fsbefore {
    top: -5px;
  }
  &fsafter {
    width: 100%;
  }
`;

const Error = styled.div`
  background-color: red;
`;

const BottomTxt = styled.div`
  margin-top: 60px;
  text-align: center;
  font-size: 13px;
`;

export {
  Body,
  BodyImg,
  LoginForm,
  LogButton,
  LoginFormH1,
  BottomTxt,
  SigninForm,
  SigninFormH1,
  SignBody,
  TxtBox,
  TxtbInput,
  Error,
};
