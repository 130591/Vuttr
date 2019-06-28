import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  color: #b1adb9;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border: 0px;
  border-radius: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: #f5f4f6;
  outline: none;
`;

export const Check = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;

  input {
    width: 25px;
    height: 25px;
    opacity: 1;
    margin-left: 4px;
    background-color: #f5f4f6;
    border: solid 0.1rem #dedce1;
    border-radius: 0.4rem;
    outline: none;
  }

  span {
    padding-top: 22%;
    margin-left: 5px;
    font-size: 0.9em;
    height: 60px;
    display: block;
    transition: ease 0.2s;
  }

  input:checked {
    background: #12db89;
    border-color: #12db89;
  }

  .text {
    margin: 0 0 0 1.5rem;
  }
`;

export const Text = styled.textarea`
  width: 100%;
  border: 1px solid #ebeaed;
  outline: none;
  color: #b1adb9;
  font-size: 18px;
  line-height: 26px;
  border-radius: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: #f5f4f6;
`;

export const InputSearch = styled.div`
  display: flex;
  background-color: #f5f4f6;
  align-items: center;
  padding-left: 5px;
  box-sizing: border-box;
`;

export const SearchBar = styled.form`
  width: 20%;
  display: flex;
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;
  padding-top: 0px;
  border: 1px solid #f5f4f6;
  background-color: #f5f4f6;
  justify-content: space-between;
`;

export const IconSearch = styled.img`
  width: 25px;
  height: 25px;
`;

export const FormContainer = styled.form`
  width: ${props => props.Size + "%"};
  height: 100%;
  display: flex;
  margin-left: 5%;
  align-items: center;
  flex-direction: ${props => (!props.direction ? "column" : "row")};
  justify-content: space-between;
`;

export const FormGroup = styled.div`
  width: ${props => props.Size + "%"};;
  display: flex;
  align-items: ${props => props.Align};
  flex-direction: ${props => (!props.direction ? "column" : "row")};
  justify-content: space-between;

  label {
    text-align:left;
    font-size: 20px;
    line-height: 26px;
    color #8F8A9B;
    padding-bottom: 5px;
  }
`;
