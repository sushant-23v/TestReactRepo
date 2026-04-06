import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Promotions from './components/Promotions.jsx' // Import the new Promotions component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import necessary routing components

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Switch>
          <Route path="/promotions" component={Promotions} /> {/* Add route for Promotions */}
          <Route path="/" exact>
            <About />
            <Testimonials />
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}