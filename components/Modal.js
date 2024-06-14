import React from 'react';
import Styles from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent}>
        <span className={Styles.closeButton} onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
