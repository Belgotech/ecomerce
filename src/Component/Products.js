import { useState, useEffect } from 'react'
import Img1 from '../wallpaperflare.com_wallpaper.jpg'

const Products = () => {

    const [Products, setProducts] = useState([])

    const getProducts = async ()=>{
        const response = await fetch('https://dummyjson.com/product')
        const json = await response.json()
    }

    useEffect(()=>{

    })

    return (
        <div className="Small-container">
            <h2>Featured Products</h2>
            <div className="Row">
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
            </div>

            <h2>Latest Products </h2>
            <div className="Row">
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
            </div>
        </div>
    )
}

export default Products