import ProductCard from './ProductCard'
import EmptyState from './EmptyState'

export default function ProductGrid({ products, wishlist, onWish, onAdd, isFiltering }) {
  if (products.length === 0) {
    return <EmptyState title="Produk tidak ditemukan" text={isFiltering ? 'Coba ganti kata kunci, kategori, atau matikan filter favorit.' : 'Katalog masih kosong.'} />
  }
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} liked={wishlist.includes(p.id)} onWish={onWish} onAdd={onAdd} />
      ))}
    </div>
  )
}
