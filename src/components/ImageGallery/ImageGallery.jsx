import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, modalOpen }) => {
  // Проверяем, есть ли изображения
  if (images.length === 0) {
    return null; // Если изображений нет, ничего не рендерим
  }

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} modalOpen={modalOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;