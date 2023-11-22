import Hero from './hero';

const Home = () => {
    return (
        <div>
            <Hero text="Welcome to Movie Browser"/>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2'>
                        <p className='lead'>
                            Yor one stop shop for everything movies. Search our database for your favourite flicks,
                            search by genre or hit random to discover one of our 1000's of hidden gems. 
                                </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;