import { useState } from "react";
import axios from "axios";
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';

function App() {
  const [searchVal, setSearchVal] = useState('');
  const [imageList, setImageList] = useState([]);
  const [errorVisible, setErrorVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const [page, setPage] = useState(1);

  const ModalOpen = (image) => {
    setSelectedImage(image);
    setImageVisible(true);
  };

  const SearchValInput = (e) => {
    setSearchVal(e.target.value);
  };

  const fetchImages = async (pageNumber) => {
    setLoaderVisible(true);
    setErrorVisible(false);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchVal}&client_id=vhhekI9tjRuZZf0vLg2GFRcGXGN5nW2K07gmlhMUelU&per_page=12&page=${pageNumber}`
      );
      setImageList(prevImages => [...prevImages, ...response.data.results]);
      setLoadMoreVisible(response.data.results.length > 0);
    } catch (error) {
      setErrorVisible(true);
    } finally {
      setLoaderVisible(false);
    }
  };

  const SubmitOn = () => {
    setPage(1); 
    setImageList([]); 
    fetchImages(1); 
  };

  const loadMoreImages = () => {
    const nextPage = page + 1; 
    setPage(nextPage); 
    fetchImages(nextPage); 
  };

  const closeModal = () => {
    setImageVisible(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.app}>
      <SearchBar searchValInput={SearchValInput} searchVal={searchVal} SubmitOn={SubmitOn} />
      <ImageGallery images={imageList} modalOpen={ModalOpen} />
      {loadMoreVisible && <LoadMoreBtn onClick={loadMoreImages} />}
      {loaderVisible && <Loader />}
      {errorVisible && <ErrorMessage />}
      {imageVisible && selectedImage && (
        <ImageModal isOpen={imageVisible} onClose={closeModal} imageUrl={selectedImage} />
      )}
      <Toaster />
    </div>
  );
}

export default App;
