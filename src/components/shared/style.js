import styled from "styled-components";

export const Main = styled.section`
  width: 50%;
  margin-top: 1%;
  margin-left: 25%;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  max-width: 84%;
  margin-left: -1%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 120px;
  height: 35px;
  border: 0px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  outline: none;
  cursor: pointer;
  color: #fff;
  border-radius: 5px;
  background-color: #365df0;

  :hover {
    background-color: #354ff0;
  }

  :focus {
    background-color: #375da1;
  }
`;

export const DangerButton = styled(Button)`
  background-color: #f95e5a;

  :hover {
    background-color: #f96e5a;
  }

  :focus {
    background-color: #f94e4a;
  }
`;
