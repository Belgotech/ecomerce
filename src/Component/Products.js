import { useState, useEffect } from 'react'
import Img1 from '../wallpaperflare.com_wallpaper.jpg'

const Products = () => {

    const [Products, setProducts] = useState([])
    const [error, setError] = useState([])

    const getProducts = async ()=>{
        try{
        const response = await fetch('https://dummyjson.com/product')
        const json = await response.json()
        setProducts(json.data.Products)
    }catch(error){
        setError(error.message)
    }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div className="Small-container">
            <h2>Featured Products</h2>
            {error !== "" && error}
            {JSON.stringify(Products.map((product, index)=>{
                return(
                    <div className='Row'>
                        <div className="Col-4" key={index}>
                            <img src={product.image} alt="this is the products image" />
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
            {JSON.stringify(Products.map((product, index)=>{
                return(
                    <div className='Col-4'key={index}>
                        <img src={product.image} alt="" />
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                    </div>
                )
            }))}
            </div>
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