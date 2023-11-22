import Hero from './hero';

const aboutView = () => {
    return (
        <div>
            <Hero text="About Us" />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2'>
                        <p className='lead'>
                            Welcome to my first react project using the free API, The Movie Database.
                            Using React with bootstrap i have created a page that takes input form the user and returns a list of movies and their details.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutView;