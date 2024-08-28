import css from './ImageModal.module.css'; 
import Modal from 'react-modal';


Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.Modal__content} 
      overlayClassName={css.Modal__overlay} 
    >
      <button onClick={onClose} className={css.closeButton}>Close</button>
      <img src={imageUrl.urls.regular} alt="Modal Content" className={css.modalImage} />
    </Modal>
  );
};

export default ImageModal;







