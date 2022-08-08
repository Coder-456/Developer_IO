import { Link } from 'react-router-dom';

function Navbar()
{
    return (
        <nav className="navbar">
            <img src='https://www.explaincode.app/static/media/coding.829f9161.png' style={{width:'70px', height:'70px'}}></img>
            <h1> Developer.io </h1>
            <div className="links">
                <Link to="/home"> Home </Link>
                <Link to="/create" style = { {
                    color : "white",
                    backgroundColor : "#64a0a0",
                    borderRadius : "10px",
                    fontSize:"4mm"
                } }>  Float </Link>
                <Link to="/" style = { {
                    color : "white",
                    backgroundColor : '#647383',
                    borderRadius : "10px",
                    fontSize:"4mm"
                } }> Log Out </Link>
            </div>
        </nav>
    );
}

export default Navbar;