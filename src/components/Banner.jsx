import './Banner.css'

import Navigation from './Navigation'
import seeMore from '../assets/seeMore.png'



function Banner() {
  return (
    <main className='banner-container' >
        <Navigation />
        <div className='banner-text' >
          <h1 className='fresh'>Fresh</h1>
          <h1 className='numb'>2022</h1>
          <h1 className='look'>Look</h1>
        </div>
        <div className='see-more'>
          <img  src={seeMore}/>
        </div>
    </main>
  )
}

export default Banner