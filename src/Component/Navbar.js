import Img1 from '../wallpaperflare.com_wallpaper.jpg'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Logo">
                {/* <img src={} alt="" /> */}
                <p>BELGO-Store</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Product">Product</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Account">Account</a></li>
                </ul>
            </nav>
            <img src={Img1} alt="this is a cart icon" width={'30px'} height={'30px'} />
            <img src={Img1} alt="this is a menu icon" width={'30px'} height={'30px'} className='Menu-icon' />
        </div>
    )
}

export default Navbar