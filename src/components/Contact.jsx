export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact & Hours</h2>
        <p className="muted">123 Roast Street, Beanville • (555) 123-4567</p>

        <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: '1fr 1fr' }}>
          <form className="form" onSubmit={(e) => e.preventDefault()} aria-label="Reservation form">
            <input className="input" name="name" placeholder="Your name" aria-label="Your name" />
            <input className="input" name="email" placeholder="Email" aria-label="Email" type="email" />
            <input className="input" name="date" placeholder="Preferred date" aria-label="Preferred date" type="date" />
            <textarea className="textarea" name="note" placeholder="Notes" aria-label="Notes" />
            <button className="btn btn-primary" type="submit">Send Request</button>
          </form>

          <div className="card" aria-label="Map placeholder">
            <h3>Find Us</h3>
            <p>
              We are in the heart of Beanville. Street parking available.  
              Open daily 7:00–19:00.
            </p>
            <a className="btn btn-outline" href="https://maps.google.com" target="_blank" rel="noreferrer">
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
