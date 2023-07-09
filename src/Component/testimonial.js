import Img1 from '../wallpaperflare.com_wallpaper.jpg'

const Testimonial =()=>{
    return(
        <div className="Testimonial">
            <div className="Small-container">
                <div className="Row">
                    <div className="Col-3">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae reiciendis ad debitis. Accusantium praesentium natus eius possimus in consectetur voluptate!</p>
                        <img src={Img1} alt="" />
                        <h3>Jony Dean</h3>
                    </div>
                    <div className="Col-3">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae reiciendis ad debitis. Accusantium praesentium natus eius possimus in consectetur voluptate!</p>
                        <img src={Img1} alt="" />
                        <h3>Ambrose Jane</h3>
                    </div>
                    <div className="Col-3">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae reiciendis ad debitis. Accusantium praesentium natus eius possimus in consectetur voluptate!</p>
                        <img src={Img1} alt="" />
                        <h3>Vegan Moses</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial