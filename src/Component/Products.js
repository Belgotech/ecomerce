import { useState, useEffect } from 'react'
import Img1 from '../t-shirt2 2.jpeg'
import Img2 from '../ipone14.webp'
import Img3 from '../eye-glass1.jpeg'
import Img4 from '../iphone14-2.webp'
import Img5 from '../shoe3.webp'
import Img6 from '../t-shirt2 2.jpeg'
import Img7 from '../shoe2.jpeg'
import Img8 from '../eye-glass2.jpeg'
import Img9 from '../ipone14.webp'
import Img10 from '../ipone14.webp'

const Products = () => {

    const [Products, setProducts] = useState([])
    const [error, setError] = useState([])

    const getProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/product')
            const json = await response.json()
            setProducts(json.data.Products)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="Small-container">
            <h2>Featured Products</h2>
            {error !== "" && error}
            {JSON.stringify(Products.map((product, index) => {
                return (
                    <div className='Row'>
                        <div className="Col-4" key={index}>
                            {/* <img src={Img1} alt="this is the products image" /> */}
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                        </div>
                    </div>
                )
            }))}

            <div className="Row">
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img2} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img3} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img4} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img5} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img6} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img7} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img8} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
            </div>

            <h2>Latest Products </h2>
            <div className="Row">
                {error !== "" && error}
                {JSON.stringify(Products.map((product, index) => {
                    return (
                        <div className='Col-4' key={index}>
                            {/* <img src={Img1} alt="this is the image of a latest product" /> */}
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                        </div>
                    )
                }))}
            </div>
            <div className="Row">
                <div className="Col-4">
                    <img src={Img9} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img10} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img3} alt="" />
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
                    <img src={Img8} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
                <div className="Col-4">
                    <img src={Img2} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00</p>
                </div>
            </div>
        </div>
    )
}

export default Products