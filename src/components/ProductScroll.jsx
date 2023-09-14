import './ProductScoll.css'
import line from '../assets/line.png'
import ProductContainer from './ProductContainer'
import SideMenu from './SideMenu'
import { useState } from 'react';


function ProductScroll({ products }) {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const handlePrevClick = () => {
        setStartIndex(Math.max(startIndex - itemsPerPage, 0));
    };

    const handleNextClick = () => {
        setStartIndex(Math.min(startIndex + itemsPerPage, products.length - itemsPerPage));
    };
    return (
        <section className='product-scroll-container'>
            <div className='head-content'>
                <span className='heading'>
                    <h2>New Products </h2>
                    <img src={line} />
                </span>
                <div className='arrows'>
                    <button onClick={handlePrevClick} disabled={startIndex === 0}>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <button onClick={handleNextClick} disabled={startIndex + itemsPerPage >= products.length}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
            <div className='product-content-container'>
                <SideMenu />
                <ProductContainer products={products.slice(startIndex, startIndex + itemsPerPage)}  />
            </div>
        </section>
    )
}

export default ProductScroll