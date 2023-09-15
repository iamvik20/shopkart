// import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { useRef, useState } from 'react';
import bannerLine from '../assets/BannerLine.png'

const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
        child: [
            { name: 'Product 1', id: 'p1' },
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3' },
            { name: 'Product 4', id: 'p4' },
        ],
    },
    { name: 'Contact Us', id: 'contact' },
];

function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const windowSize = useRef([window.innerWidth])

    const toggleDropdown = (id) => {
        setDropdownOpen(dropdownOpen === id ? null : id);
    };

    const [showMenu, setShowMenu] = useState(false);



    const toggleMenu = () => {   
      setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className='banner-content'  >
                <span className='logo'>ShopKart</span>
                <button className='button-nav' onClick={toggleMenu} >
                    <i className={`fa-solid ${showMenu ? 'fa-xmark' : 'fa-bars'} fa-xl`}></i>
                </button>
                <div className='cart-items'>
                    <span style={{padding: '0px 1rem'}}>WHISHLIST(0)</span>
                    <span style={{padding: '0px 1rem'}}>BAG(0)</span>
                </div>
                
            </div>
            <img className="banner-line" src={bannerLine} />
            <ul className={` main-nav ${showMenu ? 'show' : '' }`}>
                {navbar.map((item) => (
                    <li key={item.id} onMouseEnter={() => toggleDropdown(item.id)} onMouseLeave={() => toggleDropdown(null)}>
                        <Link to={`/`}>{item.name}</Link>
                        {item.child && dropdownOpen === item.id && (
                            <ul className="dropdown">
                                {item.child.map((subItem) => (
                                    <li className='dropdown-li' key={subItem.id}>
                                        <Link to={`/`}>{subItem.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
