import './App.css';
import BasicNav from './components/BasicNav';
import Home from './components/home';
import PageNotFound from './components/PageNotFound';
import AboutView from './components/aboutView';
import { Routes, Route } from 'react-router-dom';
import SearchView from './components/SearchView';
import { useState, useEffect } from 'react';
import MovieView from './components/MovieView';
import 'bootstrap/dist/css/bootstrap.css';  




function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  const [genre, setGenre] = useState("")
  const [genreClicked, setGenreClicked] = useState(false)
  const genreIndexList = [
  {"genre": "Action", "index": 28} ,
  {"genre": "Adventure", "index": 12},
  {"genre": "Animation", "index": 16},
  {"genre": "Comedy", "index": 35},
  {"genre": "Crime", "index": 80}, {"genre": "Documentary", "index": 99},
  {"genre": "Drama", "index": 18}, {"genre" : "Family", "index": 10751}, 
  {"genre": "Fantasy", "index": 14},
  {"genre": "History", "index": 36}, {"genre": "Horror", "index": 27}, 
  {"genre": "Music", "index": 10402}, {"genre": "Mystery", "index": 9648}, 
  {"genre": "Romance", "index":10749}, {"genre": "Science Fiction", "index": 878},
  {"genre": "Thriller", "index": 53}, {"genre": "TV Movie", "index": 10770}, {"genre": "War", "index": 10752},
  {"genre": "Western", "index": 37}]
  
  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=f64a50dd8b1284e513840260e6a9fe5f&
      language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          
          setSearchResults(data.results)
        })
        .catch(err => console.error(err));
      } 
    }, [searchText])

  useEffect(() => {
    if (genre) {
      let genreIndex = genreIndexList.find((index) => index.genre === (genre));
      let genreIndexSearch = genreIndex.index
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f64a50dd8b1284e513840260e6a9fe5f&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&with_genres=${genreIndexSearch}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
        .catch(err => console.error(err));
      }    
    }, [genre])

  return (
    <div className="App">
      <BasicNav searchText ={searchText} setSearchText={setSearchText} searchResults={searchResults} 
      setIsClicked={setIsClicked} isClicked={isClicked} genre={genre} setGenre={setGenre} 
      setGenreClicked={setGenreClicked} genreClicked={genreClicked}
      />
      <Routes>

        <Route exact path='/' element={<Home />} >
        </Route>

        <Route path='/about' element={<AboutView />} />

        <Route path='/search' element={<SearchView 
        searchText={searchText} searchResults={searchResults}
        isClicked={isClicked} setIsClicked={setIsClicked} setGenreClicked={setGenreClicked}
        genreClicked={genreClicked} genre={genre} />} 
        />

        <Route path="/movies/:id" element={<MovieView />} />

        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
}

export default App;