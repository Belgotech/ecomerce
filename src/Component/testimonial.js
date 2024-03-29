import { FaQuoteLeft } from 'react-icons/fa'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import Img1 from '../img/person1.jpeg'
import Img2 from '../img/person2.jpeg'
import Img3 from '../img/person3.jpeg'

const Testimonial = () => {
    return (
        <div className="Testimonial">
            <div className="Small-container">
                <div className="Row">
                    <div className="Col-3">
                        <FaQuoteLeft className='quote' />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae reiciendis ad debitis. Accusantium praesentium natus eius possimus in consectetur voluptate!</p>
                        <img src={Img1} alt="" />
                        <div className="Rating">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                            <BsStar />
                        </div>
                        <h3>Jony Dean</h3>
                    </div>
                    <div className="Col-3">
                        <FaQuoteLeft className='quote' />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae reiciendis ad debitis. Accusantium praesentium natus eius possimus in consectetur voluptate!</p>
                        <img src={Img2} alt="" />
                        <div className="Rating">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                        </div>
                        <h3>Ambrose Jane</h3>
                    </div>
                    <div className="Col-3">
                        <FaQuoteLeft className='quote' />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae reiciendis ad debitis. Accusantium praesentium natus eius possimus in consectetur voluptate!</p>
                        <img src={Img3} alt="" />
                        <div className="Rating">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                            <BsStar />
                        </div>
                        <h3>Vegan Moses</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial