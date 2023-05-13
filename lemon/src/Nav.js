import "./Nav.css"

function Nav(){
    return (
    <nav>
        <ul className="navbar">
            <li className="nav-item"><a>Home</a></li>
            <li className="nav-item"><a>About</a></li>
            <li className="nav-item"><a>Menu</a></li>
            <li className="nav-item"><a>Reservations</a></li>
            <li className="nav-item"><a>Order online</a></li>
            <li className="nav-item"><a>Login</a></li>
        </ul>
    </nav>
    );
    }
    export default Nav;