import Hero from './hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import imageNotFound from '../imageNotFound.jpg'

const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f64a50dd8b1284e513840260e6a9fe5f`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovieDetails(data)
                setIsLoading(false)
            })

    }, [id])

    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="loading..." />
        }
        if(movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
            const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                <div>  
                    <Hero text={movieDetails.original_title} backdrop={backdropURL}/>
                    <div className='container my-5'>
                        <div className='row'> 
                            <div className='col-md-3'>
                                <img src={posterPath.includes("null") ? imageNotFound : posterPath} alt="..." className='img-fluid shadow rounded' />
                            </div>
                            <div className='col-md-9'>
                                <h2>{movieDetails.original_title}</h2>
                                <p className='lead'>
                                    {movieDetails.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                

            ) 
        }
    }

    return renderMovieDetails();
};

export default MovieView;