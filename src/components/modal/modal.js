import React from "react";
import propTypes from "prop-types";

import {
  ModalContainer,
  Description,
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  Close
} from "./style";
import { Input, FormGroup, FormContainer, Text } from "../form/style";
import { Button, DangerButton, ButtonWrapper } from "../shared/style";

import close from "../../imagens/Icon-Close-2px.svg";

export const ModalDefault = ({ onClose, onPress }) => {
  return (
    <ModalContainer primary={false} Size="35">
      <ModalHeader>
        <ModalTitle>+ Add new toll</ModalTitle>
        <Close src={close} onClick={onClose} />
      </ModalHeader>
      <ModalBody>
        <FormContainer
          onSubmit={e => {
            onPress(e);
            onClose();
          }}
        >
          <FormGroup Size="90" Align="flex-start">
            <label>Tool Name</label>
            <Input type="text" placeholder="Required..." name="name" />
          </FormGroup>
          <FormGroup Size="90" Align="flex-start">
            <label>Tool Link</label>
            <Input type="text" placeholder="Required..." name="link" />
          </FormGroup>
          <FormGroup Size="90" Align="flex-start">
            <label>Tool Description</label>
            <Text col="15" placeholder="Required..." name="desc" />
          </FormGroup>
          <FormGroup Size="90" Align="flex-start">
            <label>Tags</label>
            <Input type="text" placeholder="Required..." name="tags" />
          </FormGroup>
          <ModalFooter>
            <Button>Add Tool</Button>
          </ModalFooter>
        </FormContainer>
      </ModalBody>
    </ModalContainer>
  );
};

export const ModalDelete = ({ isDelete, onClose, onPress, onCancel }) => {
  return (
    <ModalContainer primary={false} Size="15">
      <ModalHeader>
        <ModalTitle>Delete Tool</ModalTitle>
        <Close src={close} onClick={onClose} />
      </ModalHeader>
      <Description>
        Tem certeza que você deseja deletar está ferramenta ?{" "}
      </Description>
      <ButtonWrapper>
        <DangerButton onClick={onCancel}>Cancelar</DangerButton>
        <Button
          onClick={() => {
            onPress();
            onClose();
          }}
        >
          Confirmar
        </Button>
      </ButtonWrapper>
    </ModalContainer>
  );
};

ModalDefault.propTypes = {
  onClose: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired
};

ModalDelete.propTypes = {
  onClose: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired,
  isDelete: propTypes.bool
};
