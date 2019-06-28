import styled from "styled-components";

export const ModalContainer = styled.div`
  width: ${props => props.Size + "%"};
  min-width: 400px;
  min-height: 250px;
  box-sizing: border-box;
  box-shadow: 0px 20px 25px;
  margin-left: 300px;
  margin-top: 25px;
  background-color: #fff;
`;

export const ModalHeader = styled.article`
  width: 90%;
  display: flex;
  margin-left: 5%;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  display: flex;
  font-size: 22px;
  line-height: 27px;
  color: #170c3a;
`;

export const Close = styled.img`
  width:12px
  height: 12px;
  cursor: pointer;
`;

export const ModalBody = styled.article`
  height: 500px;
  display: flex;
  margin-top: 28px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalFooter = styled.footer`
  max-height: 80%;
  height: 10%;
  display: flex;
  margin-left: 58%;
  margin-top: 5px;
  margin-bottom: 30px;
  padding: 5px;
  box-sizing: border-box;
`;

export const Description = styled.p`
  width: 60%;
  margin: 0 auto;
  margin-top: 40px;
  color: #170c3a;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.2em;
  text-align: center;
  box-sizing: border-box;
`;
