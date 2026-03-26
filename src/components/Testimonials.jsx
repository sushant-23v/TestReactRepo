const quotes = [
  {
    quote: 'The best latte in town—silky smooth and perfectly balanced!',
    name: 'Priya K.',
  },
  {
    quote: 'Cozy vibe, friendly staff, and pastries I dream about.',
    name: 'Alex R.',
  },
  {
    quote: 'My daily stop. Their cold brew is unmatched.',
    name: 'Sam T.',
  },
]

export default function Testimonials() {
  return (
    <section className="container">
      <h2>Loved by Locals</h2>
      <div className="testimonial-grid">
        {quotes.map((q) => (
          <figure key={q.name} className="card">
            <div className="stars" aria-hidden="true">★★★★★</div>
            <blockquote>“{q.quote}”</blockquote>
            <figcaption>— {q.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
