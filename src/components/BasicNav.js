import { useNavigate ,Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BasicNav = ({searchText, setSearchText, searchResults, 
  setIsClicked, isClicked, genre, setGenre, setGenreClicked, genreClicked}) => {
  const navigate = useNavigate();

  const updateSearchText = (e)  => {
    navigate(`/search`, {replace: true});
    setIsClicked(false)
    setGenreClicked(false)
    setSearchText(e.target.value)
  }
  

  const searchButtonPressed = (event) => {
    event.preventDefault();
    setGenreClicked(false)
    setIsClicked(true)
    navigate(`/search`, {replace: true});   
  }

  const genreSearch = (e) => {
    e.preventDefault();
    setGenre(e.target.innerText)
    setSearchText("")
    navigate(`/search`, {replace: true});
    setGenreClicked(true)
    setIsClicked(false)
  }

  const genreList = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "Thriller", "TV Movie", "War", "Western"]


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">The Movie Browser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
            {genreList.map((genre) => (
                <NavDropdown.Item  id="dropdown-size-small"onClick={genreSearch} key={genre} href="#action/3.1">{genre}</NavDropdown.Item>
            ))}
            </NavDropdown>

          </Nav>
          <form className="d-flex" role="search">
            <input className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
             />
            <button onClick={searchButtonPressed} className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BasicNav;