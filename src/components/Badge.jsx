export default function Badge({ tone = 'sky', children }) {
  return <span className={`badge tone-${tone}`}>{children}</span>
}
