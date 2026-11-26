export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-bg"
        src="/images/hero.jpg"
        alt="Banner toko"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1>Perlengkapan Kuliah &amp; Kerja dalam Satu Tempat</h1>
        <p className="lead">
          Temukan tas, elektronik, alat tulis, dan aksesori meja belajar pilihan untuk aktivitas harianmu.
        </p>
        <a href="#katalog" className="btn hero-btn">
          Lihat Katalog
        </a>
      </div>
    </section>
  )
}