import Img1 from "../eye-glass1.jpeg";
import Img2 from "../shoe1.jpeg";
import Img3 from "../t-shirt2.jpeg";

const Categories = () => {
    return (
        <div className="Categories">
            <div className="Small-container">
                <div className="Row">
                    <div className="Col-3"><img src={Img1} alt="" /></div>
                    <div className="Col-3"><img src={Img2} alt="" /></div>
                    <div className="Col-3"><img src={Img3} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Categories