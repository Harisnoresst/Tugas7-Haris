import { useState } from 'react'
import Badge from './Badge'
import { rupiah } from '../utils/format'

export default function ProductCard({ product, liked, onWish, onAdd }) {
  const [open, setOpen] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd(product.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="card product">
      <div className={`thumb tone-${product.tone}`}>
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <span aria-hidden="true">{product.emoji}</span>
        )}
        <button
          className={`heart ${liked ? 'on' : ''}`}
          onClick={() => onWish(product.id)}
          aria-pressed={liked}
          aria-label={liked ? 'Hapus dari favorit' : 'Tambah ke favorit'}
        >
          {liked ? '♥' : '♡'}
        </button>
        {product.stock <= 8 && (
          <span className={`stock ${product.stock <= 5 ? 'stock-low' : ''}`}>
            <Badge tone="coral">Sisa {product.stock}</Badge>
          </span>
        )}
      </div>
      <div className="product-info">
        <Badge tone={product.tone}>{product.category}</Badge>
        <h3>{product.name}</h3>
        <div className="price-row">
          <strong className="price">{rupiah(product.price)}</strong>
          <span className="rating">★ {product.rating}</span>
        </div>
        {open && <p className="desc">{product.desc}</p>}
        <div className="card-actions">
          <button className="link" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? 'Sembunyikan' : 'Lihat detail'}
          </button>
          <button className="btn btn-small btn-primary" onClick={handleAdd}>
            {added ? 'Ditambahkan ✓' : '+ Keranjang'}
          </button>
        </div>
      </div>
    </article>
  )
}