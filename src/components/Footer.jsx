export default function Footer({ profile }) {
  return (
    <footer id="tentang" className="footer">
      <p><strong>{profile.nama}</strong> (NIM {profile.nim}) Tugas 7 Pengembangan Website.</p>
    </footer>
  )
}
