import BookingPage from "./BookingPage";
import Hero from "./Hero";
import HomePage from "./HomePage";
import Main from "./Main";
import "./Nav.css"
import { Route, Link, Routes } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="navbar">
                <Link to="/" className="nav-item">Home</Link>
                <li className="nav-item"><a>About</a></li>
                <li className="nav-item"><a>Menu</a></li>
                <Link to="booking" className="nav-item">Reservations</Link>
                <li className="nav-item"><a>Order online</a></li>
                <li className="nav-item"><a>Login</a></li>
            </ul>
        </nav>
    );
}
export default Nav;