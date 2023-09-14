// import upArrow from '../assets/upArrow.png';

function Card({ id, title, image, description, price }) {
    return (
        <div className='card-container' key={id}>
            <img src={image} alt='product' >
            </img>
            <i style={{ float: 'right', fontSize: "15px" }} className="fa-solid fa-up-right-from-square"></i>
            <div className="card-item-head">{title}</div>
            <div className="card-item-description">{description}</div>
            <div className="card-item-price">${price}</div>
        </div>
    )
}

export default Card