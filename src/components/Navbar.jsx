export default function Navbar({ cartCount, wishCount, onCart }) {
  return (
    <header className="navbar">
      <a href="#top" className="brand"><span/> HarisCommerce</a>
      <nav aria-label="Navigasi utama">
        <a href="#katalog">Katalog</a>
        <a href="#tentang">Tentang</a>
        <button className="cart-btn" onClick={onCart} aria-label={`Buka keranjang, ${cartCount} barang`}>
          🛒 Keranjang <span className="count">{cartCount}</span>
        </button>
      </nav>
      <span className="sr-only">{wishCount} produk favorit</span>
    </header>
  )
}
