import { SecNav } from "./SecNav";

export function Navbar() {
    return (
        <nav>
            <img src="../../../images/logo_1.png"/>
            <div id="main-navbar">
                <a className="liens-nav" href="#">Accueil</a>
                <a className="liens-nav" href="#">Imformation</a>
                <a className="liens-nav" href="#">Galerie</a>
                <a className="liens-nav" href="#">Market place</a>
            </div>
            <SecNav className="secondary-navbar"/>
        </nav>
    );
}