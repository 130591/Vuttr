import React from "react";
import propTypes from "prop-types";

import {
  FormContainer,
  Input,
  FormGroup,
  Check,
  IconSearch,
  InputSearch
} from "../form/style";

import search from "../../imagens/Icon-Search-2px.svg";

export const Form = ({ onSearching }) => {
  return (
    <FormContainer direction="row" Size="90" onChange={e => onSearching(e)}>
      <FormGroup Size="80" direction="row" Align="center">
        <InputSearch>
          <IconSearch src={search} alt="search" />
          <Input type="text" placeholder="Search..." name="search" />
        </InputSearch>
        <Check>
          <Input type="checkbox" name="check" />
          <span>Buscar apenas por tags</span>
        </Check>
      </FormGroup>
    </FormContainer>
  );
};

Form.propTypes = {
  onSearching: propTypes.func
};
