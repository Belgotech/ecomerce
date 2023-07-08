import Img1 from '../237677.jpg'

const Products = ()=>{
    return(
        <div className="Small-container">
            <h2>Featured Products</h2>
            <div className="Row">
                <div className="Col-4">
                    <img src={Img1} alt="" />
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>$50.00ff</p>
                </div>
            </div>
        </div>
    )
}

export default Products