import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning fixed-top py-2">
      <div className="container-fluid">

        <a className="navbar-brand fw-bold" href="#home">
          Asma
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link fw-bold" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-bold" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-bold" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-bold" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-bold" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
