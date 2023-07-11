import Img1 from '../person1.jpeg'
import Img2 from '../person2.jpeg'
import Img3 from '../person3.jpeg'

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
                        <img src={Img2} alt="" />
                        <h3>Ambrose Jane</h3>
                    </div>
                    <div className="Col-3">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae reiciendis ad debitis. Accusantium praesentium natus eius possimus in consectetur voluptate!</p>
                        <img src={Img3} alt="" />
                        <h3>Vegan Moses</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial