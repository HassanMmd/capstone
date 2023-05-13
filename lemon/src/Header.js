import logo from "./assets/Logo .svg"
import Nav from './Nav';
import "./Header.css"
import Hero from "./Hero";


function Header(){
return (
<header className="header">
<img src={logo}></img>
<Nav />
</header>
);
}
export default Header;