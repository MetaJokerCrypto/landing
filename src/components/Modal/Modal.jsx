import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '1000'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(19, 30, 55)',
    zIndex: '1000'
  }
};

// forwardRef(({ children, ...props }, ref)

const ModalComponent = forwardRef(({ isOpenModal, closeModal, children }, ref) => {
  const modalRef = useRef();
  useImperativeHandle(ref, () => modalRef.current, [modalRef]);

  return (
    <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={customStyles} ariaHideApp={false} ref={modalRef}>
      {children}
    </Modal>
  );
});

export default ModalComponent;
