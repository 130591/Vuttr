import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

import { ModalDefault, ModalDelete } from "./modal";

const customStyles = {
  content: {
    top: "50%",
    left: "37%",
    right: "auto",
    bottom: "auto",
    width: "100%",
    border: "0px",
    marginLeft: "27.5%",
    backgroundColor: "rgba(12,9,8,0.0)",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(12,9,8,0.8)"
  }
};

const ModalContent = ({ children, onAction, isDelete, Id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModal() {
    modalIsOpen === false ? setModalIsOpen(true) : setModalIsOpen(false);
  }

  return (
    <>
      <div onClick={handleModal}>{children}</div>
      {modalIsOpen === false ? (
        ""
      ) : (
        <Modal
          isOpen={handleModal}
          onRequestClose={handleModal}
          style={customStyles}
          contentLabel="My Modal"
        >
          {isDelete === true ? (
            <ModalDelete
              onClose={handleModal}
              onPress={() => onAction(Id)}
              onCancel={handleModal}
            />
          ) : (
            <ModalDefault onClose={handleModal} onPress={onAction} />
          )}
        </Modal>
      )}
    </>
  );
};

ModalContent.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
  customStyles: PropTypes.object.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  isDelete: PropTypes.object
};

export default ModalContent;
