import CartItem from './CartItem'
import EmptyState from './EmptyState'
import { rupiah } from '../utils/format'

export default function CartPanel({ items, total, onClose, onQty, onRemove }) {
  return (
    <div className="overlay" onClick={onClose}>
      <aside className="cart" role="dialog" aria-label="Keranjang belanja" onClick={(e) => e.stopPropagation()}>
        <div className="cart-head">
          <h3>Keranjang</h3>
          <button className="link" onClick={onClose}>Tutup</button>
        </div>
        {items.length === 0 ? (
          <EmptyState title="Keranjang masih kosong" text="Tambahkan produk dari katalog." />
        ) : (
          <>
            <ul className="cart-list">
              {items.map((i) => <CartItem key={i.id} item={i} onQty={onQty} onRemove={onRemove} />)}
            </ul>
            <div className="cart-total"><span>Total</span><strong>{rupiah(total)}</strong></div>
          </>
        )}
      </aside>
    </div>
  )
}
