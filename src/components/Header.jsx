

function Header() {
    return (
        <header>

            <div className="header-left-content">
                <i className="fa-solid fa-truck"></i>
                <span>Free Delivery</span>
                <hr></hr>
                <span>Return Policy</span>
            </div>
            <div className="header-right-content">
                <span className="login" >
                    Login
                </span>
                <span className="follow" >Follow US</span>
                <span>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </span>
            </div>
        </header>
    )
}

export default Header