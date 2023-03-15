function Navbar() {
    return (
        <nav>
            <a href="/" className="home">
                Home
            </a>
            <ul>
                <li>
                    <a href="/registers">Registros</a>
                </li>
                <li>
                    <a href="/login">Iniciar sesion</a>
                </li>
            </ul>
        </nav>
    );
  }
  
export default Navbar;  