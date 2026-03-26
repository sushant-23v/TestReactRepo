export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Awaken Your Senses with Every Sip</h1>
          <p>
            Handcrafted coffee, freshly baked pastries, and a cozy space to unwind.
            Experience the perfect blend of flavor and ambiance.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#menu">Order Now</a>
            <a className="btn btn-outline" href="#contact">Book a Table</a>
          </div>
        </div>
        <div>
          <img
            className="hero-img"
            alt="A cup of artisan coffee on a wooden table"
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  )
}
