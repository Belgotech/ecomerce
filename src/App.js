import './App.css'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Categories from './Component/Categories';


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
    </div>
  )
}
export default App