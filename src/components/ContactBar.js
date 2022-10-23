import './ContactBar.css'
import SocialMedia from './SocialMedia'

const ContactBar = () => {
    return (
        <div className='containerContactBar'>
            <SocialMedia />
            <div className='contactInfo'>
                <div>+213 555 30 88 91</div>
                <div>zkproduction@gmail.com</div>
            </div>
        </div>
    )
}

export default ContactBar
