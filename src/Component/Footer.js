// import Img1 from '../wallpaperflare.com_wallpaper.jpg'

const Footer =()=>{
    return(
        <div className="Footer">
            <div className="Container">
                <div className="Row">
                    <div className="Footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Andriod and ios mobile phone.</p>
                    </div>
                    <div className="Footer-col-2">
                        {/* <img src={Img1} alt="" /> */}
                        <div className="Logo">
                            BelgoStore
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ex.</p>
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
            </div>
        </div>
    )
}
export default Footer