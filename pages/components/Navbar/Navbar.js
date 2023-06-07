import { SecNav } from "./SecNav";

export function Navbar() {
    return (
        <nav>
            <a href="#"><img src="../../../images/logo_1.png"/></a>
            <div id="main-navbar" className="flex items-center w-2/3">
                <a className="liens-nav" href="#">Accueil</a>
                <a className="liens-nav" href="#">Imformation</a>
                <a className="liens-nav" href="#">Galerie</a>
                <a className="liens-nav" href="#">Market place</a>
            </div>
            <SecNav/>
        </nav>
    );
}