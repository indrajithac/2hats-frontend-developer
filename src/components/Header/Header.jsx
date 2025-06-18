function Header() {
  return (
    <header className="bg-light p-3 shadow-sm" style={{ height: "100px" }}>
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 m-0">2Hats E-Com</h1>
        <nav>
          <a href="#" className="me-3">
            Home
          </a>
          <a href="#">Shop</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
