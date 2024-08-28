import css from './ImageGallery.module.css'; // Импорт стилей
import ImageCard from '../ImageCard/ImageCard'; 

const ImageGallery = ({ images, modalOpen }) => {
  return (
    <ul className={css.imageGallery}>
      {images.length === 0 ? (
        <div className={css.noImages}>No images found</div>
      ) : (
        images.map((image) => (
          <li key={image.id} className={css.imageItem}>
            <div className={css.imageWrapper}>
              <ImageCard image={image} modalOpen={modalOpen} />
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default ImageGallery;

