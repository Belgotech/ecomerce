import './App.css'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Categories from './Component/Categories';
import Products from './Component/Products';
import Offer from './Component/Offer';
import Testimonial from './Component/testimonial';
import Brands from './Component/Brand';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <div className="Bg-image"></div>
        <div className="Container">
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* -----------featured categories----------- */}
      <Categories />
      {/* -------------featured Product------------- */}
      <Products />
      {/* -------------------offer------------------ */}
      <Offer />
      {/* ---------------testimonial---------------- */}
      <Testimonial />
      {/* ------------------Brands------------------ */}
      <Brands />
      {/* ------------------Footer------------------ */}
      <Footer />
    </div>
  )
}
export default App