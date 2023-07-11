import Img1 from '../Screenshot_2022_02_06_at_12_22_47_pm.jpeg'
import Img2 from '../mascot-logo-design_fb-img_1200x800.jpeg'
import Img3 from '../BMW-M-Logo.png'
import Img4 from '../99be7d153299cf0e09f2ddc212ebd563.webp'
import Img5 from '../49a7247bc0f530e1d427f6dab3c32cf0.jpeg'


const Brands = () => {
    return (
        <div className="Brands">
            <div className="Small-container">
                <div className="Row">
                    <div className="Col-5">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="Col-5">
                        <img src={Img2} alt="" />
                    </div>
                    <div className="Col-5">
                        <img src={Img3} alt="" />
                    </div>
                    <div className="Col-5">
                        <img src={Img4} alt="" />
                    </div>
                    <div className="Col-5">
                        <img src={Img5} alt="" />
                    </div>
                    <div className="Col-5">
                        <img src={Img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands