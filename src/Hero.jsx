import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu}=useGlobalContext()
  return <section className="hero" onMouseMove={()=>closeSubmenu(false)}>
       <div className="hero-center">
            <article className="hero-info">
                 <h1>payment infra structure</h1>
                 <p>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam nisi nihil, blanditiis officiis deserunt natus in assumenda similique sed iste. Voluptatibus nostrum natus facilis saepe nihil. Iste ut inventore temporibus.
                 </p>
                 <button className="btn">start now</button>
            </article>
            <article className="hero-images">
              <img src={phoneImg} alt="" className='phone-img' />
            </article>
       </div>
  </section>
}

export default Hero
