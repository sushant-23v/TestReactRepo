export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <p>© {year} Brew & Bean</p>
        <p style={{ opacity: 0.9 }}>
          Follow us:
          {' '}
          <a href="#" aria-label="Instagram">Instagram</a>
          {' · '}
          <a href="#" aria-label="Facebook">Facebook</a>
          {' · '}
          <a href="#" aria-label="Twitter / X">Twitter</a>
        </p>
      </div>
    </footer>
  )
}
