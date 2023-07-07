import './App.css'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Img1 from "./wallpaperflare.com_wallpaper.jpg";

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

      <div className="Categories">
        <div className="Small-container">
          <div className="Row">
            <div className="Col-3"><img src={Img1} alt="" /></div>
            <div className="Col-3"><img src={Img1} alt="" /></div>
            <div className="Col-3"><img src={Img1} alt="" /></div>
            <div className="Col-3"><img src={Img1} alt="" /></div>
            <div className="Col-3"><img src={Img1} alt="" /></div>
            <div className="Col-3"><img src={Img1} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App