import { toast } from 'react-hot-toast';

const SearchBar = ({ searchValInput, searchVal, SubmitOn }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (searchVal.trim() === '') {
      toast.error('Please enter a search term.'); 
      return;
    }
    
    SubmitOn(); 
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={searchValInput}
          value={searchVal}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
