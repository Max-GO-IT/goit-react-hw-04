import React from 'react';
import Modal from 'react-modal';

// Устанавливаем элемент, который будет скрыт, когда модальное окно открыто
Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <button onClick={onClose}>Close</button>
      <img src={imageUrl.urls.regular} alt="Modal Content" />
    </Modal>
  );
};

export default ImageModal;






