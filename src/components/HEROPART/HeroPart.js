import React from 'react'
import HeroVideo from "../../assets/herovideo.mp4"
import "./heropart.css"
import { ReactComponent as LogoSvg } from "../../assets/logo.svg"

function Heropart() {
    return (
        <div className="hero-section">

            <video autoPlay loop muted>
                <source src={HeroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='content_Hero'>

                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='logo_style'>
                    <LogoSvg />
                </div>
            </div>
        </div >
    )
}

export default Heropart