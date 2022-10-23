import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Films from '../components/Films'
import Video from '../components/Video'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Header />
       <About />
       <Films />
      <Video />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
