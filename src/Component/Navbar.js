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
        </div>
    )
}

export default Navbar