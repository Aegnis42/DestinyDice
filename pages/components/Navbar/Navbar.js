
export function Navbar() {
    return (
        <nav className="w-full flex justify-center fixed  ">
            <a className="Logo" href="#"/>
            <div id="main-navbar" className="flex justify-between w-2/3 items-center">
                <div>
                    <a className="liens-nav" href="#">Accueil</a>
                    <a className="liens-nav" href="#">Imformation</a>
                    <a className="liens-nav" href="#">Galerie</a>
                </div>
                <a className="liens-nav" href="#">Market place</a>
            </div>
         
        </nav>
    );
}