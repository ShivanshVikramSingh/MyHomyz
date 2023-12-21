import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className='orange-circle'/>
                        <h1>Discover <br/>
                        Most Suitable <br/> 
                        Property</h1>
                    </div>

                    <div className="flexColStart hero-desc">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className=" flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type='text'>

                        </input>
                        <button className='button'>Search</button>
                    </div>

                    <div className='flexCenter stats'>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={880} end={1200} duration={3} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={7550} end={8000} duration={3.5} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={15}  />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winnings</span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src='./hero-image.png' alt='' />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Hero