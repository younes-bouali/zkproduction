import './Contact.css'
import { HomeRounded, Email, Phone, SendRounded } from '@material-ui/icons'
import { useState } from 'react';

const Contact = () => {

    const error = false;
    const success = null;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='contactContainer' id='contact'>
            <h1 className="title">Contact us</h1>
            <div className="wrapper">
                <div className="cordonner">
                    <ul className="listCordonner">
                        <li className="listItem">
                            <HomeRounded className='icon' />
                            <div className="contentList">
                                <h3 className="cordonnerTitle">Our Office adress</h3>
                                <span className="cordonnnerDesc">Tamechit batna</span>
                            </div>
                        </li>
                        <li className="listItem">
                            <Email className='icon' />
                            <div className="contentList">
                                <h3 className="cordonnerTitle">Email</h3>
                                <span className="cordonnnerDesc">zkproduction@gmail.com</span>
                            </div>
                        </li>
                        <li className="listItem">
                            <Phone className='icon' />
                            <div className="contentList">
                                <h3 className="cordonnerTitle">Phone</h3>
                                <span className="cordonnnerDesc">+213 555 30 88 91</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <form className='form' onSubmit={handleSubmit}>
                        <input type='text' className='contactInput' placeholder='Your Name' name='name' value={name} onChange={e => setName(e.target.value)} />
                        <input type='text' className='contactInput' placeholder='Your Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <textarea className='contactMessgae' placeholder='Your Message' value={message} onChange={e => setMessage(e.target.value)} />
                        <button className='contactButton' type='submit'>SEND <SendRounded/></button>
                        {error && <span className='error'>Something wrong !</span>}
                        {success && <span className='success'>Thanks I will reply</span>}
                    </form>
                </div>
            </div>
            <img src='/img/cinema.png' alt='' className='contactImg' />
        </div>
    )
}

export default Contact