import './Header.css'

function Header({ storeName }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>
      <nav>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
