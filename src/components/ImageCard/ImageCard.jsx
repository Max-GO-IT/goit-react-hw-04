import css from './ImageCard.module.css';

const ImageCard = ({ image, modalOpen }) => {
  return (
    <div>
      <img
        onClick={() => modalOpen(image)} // Передаем функцию как обработчик клика
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;

