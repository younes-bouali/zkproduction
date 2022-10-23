import ContactBar from '../components/ContactBar'
import Navbar from '../components/Navbar'
import Slide from './Slide'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <ContactBar />
       <Navbar />
      <Slide />
    </div>
  )
}

export default Header
