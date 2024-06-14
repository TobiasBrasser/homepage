// ImpressumModal.js
import React, { useState } from 'react';
import Modal from './Modal';
import Styles from './ImpressumModal.module.css';

const ImpressumModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal} className={Styles.openModalButton}>Impressum</button>
      <Modal show={showModal} onClose={toggleModal}>
        <h2>Impressum</h2>
        <p>
          <strong>Angaben gemäß § 5 TMG:</strong><br />
          Dein Name<br />
          Deine Straße<br />
          12345 Deine Stadt<br />
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          Telefon: 01234/567890<br />
          E-Mail: info@deinedomain.de<br />
        </p>
        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
          Dein Name<br />
          Deine Straße<br />
          12345 Deine Stadt<br />
        </p>
      </Modal>
    </div>
  );
};

export default ImpressumModal;
