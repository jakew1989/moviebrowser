import { Link } from 'react-router-dom';
import Hero from './hero';
import imageNotFound from '../imageNotFound.jpg'

//tmdb api key = f64a50dd8b1284e513840260e6a9fe5f
//https://api.themoviedb.org/3/movie/157336?api_key=f64a50dd8b1284e513840260e6a9fe5f



const MovieCard = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailURL = `/movies/${movie.id}`
    return (
        <div className='col-lg-3 col-md-3 col-sm-3 col-4 my-4'>
            <div className="card h-100">

            <img src={posterURL.includes("null") ? imageNotFound : posterURL} alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailURL} className='btn btn-primary'>Show Details</Link>
                </div>
            </div>
        </div>

    )
}


const SearchView = ({ searchText, searchResults, isClicked, setIsClicked, genreClicked, setGenreClicked, genre }) => {
    const resultsFound = searchResults.length; 
    let title = "";
    console.log(`isClicked is ${isClicked}`)
    console.log(`genreClicked is ${genreClicked}`)
    isClicked ? title = `${resultsFound} results found for ${searchText}` : title  = `you are searching for ${searchText}...`
    genreClicked ? title = `${resultsFound} results found in ${genre} category` : title  = `you are searching for ${searchText}...`

    const resultsHTML = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    return (
        <div>
        
            <Hero text={title} />
            {resultsHTML &&
                <div className='container'>
                    <div className='row'>
                        {resultsHTML}
                    </div>
                </div>

            }

        </div>
    )
}


export default SearchView;