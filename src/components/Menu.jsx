const items = [
  { name: 'Espresso', desc: 'Rich & bold single shot', price: 3.0 },
  { name: 'Cappuccino', desc: 'Velvety foam with espresso', price: 4.2 },
  { name: 'Latte', desc: 'Smooth espresso with milk', price: 4.5 },
  { name: 'Mocha', desc: 'Chocolate + espresso delight', price: 4.8 },
  { name: 'Cold Brew', desc: 'Slow-steeped, low acidity', price: 4.0 },
  { name: 'Croissant', desc: 'Buttery, flaky pastry', price: 2.8 },
]

export default function Menu() {
  return (
    <section id="menu" className="container">
      <h2>Our Favorites</h2>
      <p className="muted">Crafted with ethically sourced beans and local ingredients.</p>
      <div className="menu-grid">
        {items.map((it) => (
          <article key={it.name} className="card" aria-label={`${it.name} menu item`}>
            <h3>{it.name}</h3>
            <p>{it.desc}</p>
            <p className="price">${it.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
