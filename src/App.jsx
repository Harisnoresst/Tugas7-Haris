import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Toolbar from './components/Toolbar'
import CategoryFilter from './components/CategoryFilter'
import ProductGrid from './components/ProductGrid'
import CartPanel from './components/CartPanel'
import Footer from './components/Footer'
import { profile } from './data/profile'
import { products } from './data/products'

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Semua')
  const [sort, setSort] = useState('default')
  const [onlyFav, setOnlyFav] = useState(false)
  const [wishlist, setWishlist] = useState([])
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const toggleWishlist = (id) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))
  const addToCart = (id) =>
    setCart((c) => (c.some((i) => i.id === id) ? c.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)) : [...c, { id, qty: 1 }]))
  const changeQty = (id, delta) => setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0))
  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id))

  const visible = products
    .filter((p) => category === 'Semua' || p.category === category)
    .filter((p) => !onlyFav || wishlist.includes(p.id))
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (sort === 'murah' ? a.price - b.price : sort === 'mahal' ? b.price - a.price : sort === 'rating' ? b.rating - a.rating : a.id - b.id))

  const cartItems = cart.map((i) => ({ ...products.find((p) => p.id === i.id), qty: i.qty }))
  const cartCount = cart.reduce((n, i) => n + i.qty, 0)
  const total = cartItems.reduce((n, i) => n + i.price * i.qty, 0)

  return (
    <>
      <Navbar cartCount={cartCount} wishCount={wishlist.length} onCart={() => setCartOpen(true)} />
      <main>
        <Hero profile={profile} totalProducts={products.length} />
        <section id="katalog" className="section">
          <h2>Katalog produk</h2>
          <CategoryFilter categories={['Semua', ...new Set(products.map((p) => p.category))]} active={category} onChange={setCategory} />
          <Toolbar query={query} onQuery={setQuery} sort={sort} onSort={setSort} onlyFav={onlyFav} onToggleFav={() => setOnlyFav(!onlyFav)} count={visible.length} />
          <ProductGrid products={visible} wishlist={wishlist} onWish={toggleWishlist} onAdd={addToCart} isFiltering={query !== '' || category !== 'Semua' || onlyFav} />
        </section>
      </main>
      <Footer profile={profile} />
      {cartOpen && <CartPanel items={cartItems} total={total} onClose={() => setCartOpen(false)} onQty={changeQty} onRemove={removeFromCart} />}
    </>
  )
}
