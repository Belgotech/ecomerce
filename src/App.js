import './App.css'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Categories from './Component/Categories';
import Products from './Component/Products';


const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <div className="Container">
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* -----------featured categories----------- */}
      <Categories />
      {/* -------------featured Product------------- */}
      <Products />
      {/* -------------------offer----------------- */}
    </div>
  )
}
export default App