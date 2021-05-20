import { Link } from "react-router-dom";

function Navbar({favoriteArr}) {


    return (
        <div className='nav'>
            <div>
                <Link className="link" to="/">Visi vartotojai</Link>
                <Link className="link" to="/upload">Įkelti vartotoją</Link>
            </div>
        </div>
    );
}

export default Navbar;