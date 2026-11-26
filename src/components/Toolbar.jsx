export default function Toolbar({ query, onQuery, sort, onSort, onlyFav, onToggleFav, count }) {
  return (
    <div className="toolbar">
      <input type="search" value={query} onChange={(e) => onQuery(e.target.value)} placeholder="Cari produk…" aria-label="Cari produk" />
      <select value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Urutkan">
        <option value="default">Urutkan: Terbaru</option>
        <option value="murah">Harga terendah</option>
        <option value="mahal">Harga tertinggi</option>
        <option value="rating">Rating tertinggi</option>
      </select>
      <button className={`chip ${onlyFav ? 'active' : ''}`} onClick={onToggleFav} aria-pressed={onlyFav}>♥ Favorit saja</button>
      <span className="result-count">{count} produk</span>
    </div>
  )
}
