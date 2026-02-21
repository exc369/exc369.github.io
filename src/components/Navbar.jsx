const pages = ['About', 'Resume']

function Navbar({ activePage, onNavigate }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link${activePage === page.toLowerCase() ? ' active' : ''}`}
              onClick={() => onNavigate(page.toLowerCase())}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
