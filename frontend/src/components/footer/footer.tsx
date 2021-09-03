import inst from './img/instPic.png'
import fb from './img/fb.png'
import vk from './img/vk.png'
import './footer.css'

 export const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Reception</h3>
                <p>+380000000000</p>
            </div>
            <div>
                <h3>Social Networks</h3>
                <div className='social-network'>
                <img src={inst} alt="inst" />
                <img src={fb} alt="fb" />
                <img src={vk} alt="vk" />
                </div>
            </div>
        </footer>
    )
}