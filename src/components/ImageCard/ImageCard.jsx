import css from './ImageCard.module.css'; 

const ImageCard = ({ image, modalOpen }) => {
  return (
    <div className={css.imageCard}>
      <img
        onClick={() => modalOpen(image)} 
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;



