import Img1 from '../img/pngwing.com (1).png'
import Img2 from '../img/pngwing.com.png'

const Footer =()=>{
    return(
        <div className="Footer">
            <div className="Container">
                <div className="Row">
                    <div className="Footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Andriod and ios mobile phone.</p>
                        <div className="App-logo">
                            <img src={Img1} alt="" />
                            <img src={Img2} alt="" />
                        </div>
                    </div>
                    <div className="Footer-col-2">
                        <div className="Logo">
                            BelgoStore
                        </div>
                        <p>Our purpose is substainably make the pleasure and benefits of game to many.</p>
                    </div>
                    <div className="Footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="Footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>twitter</li>
                            <li>LinkedIn</li>
                            <li>Instgram</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="Copyright">Copyright 2023 - Belgostore</p>
            </div>
        </div>
    )
}
export default Footer