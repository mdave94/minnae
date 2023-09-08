import "../navbar/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="nav-item">Történetünk</div>
        <div className="nav-item">Vásárlás</div>
        <div className="nav-item">Használati útmutató</div>
        <div className="nav-item">Tájékoztatók</div>
        <div className="nav-item">Áraink</div>
      </div>
    </>
  );
}

export default Navbar;
