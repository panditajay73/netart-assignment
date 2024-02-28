import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"

function App() {
  return (
    <div className="container">
    <Header/>
      <Hero/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App