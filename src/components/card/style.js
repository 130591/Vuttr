import styled from "styled-components";

export const CardContent = styled.article`
  width: 80%;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  border-top: 3px solid #f95e5a;
  box-shadow: 0px 20px 25px 5px rgba(0, 0, 0, 0.2);
`;

export const CardHeader = styled.div`
  width: 94%;
  margin: 0 auto;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const CloseDelete = styled.img`
  width: 12px;
  heiht: 12px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #170c3a;
`;

export const CardDesc = styled.p`
  width: 80%;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 24px;
  margin-left: 30px;
  padding-bottom: 10px;
  color: #8f8a9b;
  text-align: left;
`;

export const CardTag = styled.footer`
  width: 80%;
  height: 30px;
  margin: 0 auto;
  margin-left: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #8f8a9b;
  box-sizing: border-box;
`;
