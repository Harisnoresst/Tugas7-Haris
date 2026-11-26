import { rupiah } from '../utils/format'

export default function CartItem({ item, onQty, onRemove }) {
  return (
    <li className="cart-item">
      <span className={`mini tone-${item.tone}`} aria-hidden="true">{item.emoji}</span>
      <div className="cart-info">
        <strong>{item.name}</strong>
        <span>{rupiah(item.price * item.qty)}</span>
        <div className="qty">
          <button onClick={() => onQty(item.id, -1)} aria-label="Kurangi">−</button>
          <span>{item.qty}</span>
          <button onClick={() => onQty(item.id, 1)} aria-label="Tambah">+</button>
          <button className="link danger" onClick={() => onRemove(item.id)}>Hapus</button>
        </div>
      </div>
    </li>
  )
}
