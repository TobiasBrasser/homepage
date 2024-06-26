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
          Tobias Brasser<br />
          Sägetweg 7<br />
          4538 Oberbipp<br />
        </p>
        <p>
          <strong>Kontakt:</strong><br />
          Telefon: +41 79 816 55 92<br />
          E-Mail: tobias.brasser@proton.me<br />
        </p>
        <p>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
          Tobias Brasser<br />
          Sägetweg 7<br />
          4538 Oberbipp<br />
        </p>
      </Modal>
    </div>
  );
};

export default ImpressumModal;