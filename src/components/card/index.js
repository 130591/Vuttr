import React from "react";
import PropTypes from "prop-types";

import {
  CardContent,
  CardDesc,
  CardHeader,
  Title,
  CloseDelete,
  CardTag
} from "./style";
import ModalContent from "../modal";

import close from "../../imagens/Icon-Close-2px.svg";

export const Card = props => {
  const { Key, Name, Description, Tags, isAction } = props;
  return (
    <CardContent key={Key}>
      <CardHeader>
        <Title>{Name}</Title>
        <ModalContent isDelete={true} Id={Key} onAction={isAction}>
          <CloseDelete src={close} />
        </ModalContent>
      </CardHeader>
      <CardDesc>{Description}</CardDesc>
      <CardTag>
        {Tags.map(t => (
          <span>#{t} </span>
        ))}
      </CardTag>
    </CardContent>
  );
};

Card.propType = {
  Key: PropTypes.interger,
  Title: PropTypes.string,
  Description: PropTypes.string,
  Tags: PropTypes.array
};
