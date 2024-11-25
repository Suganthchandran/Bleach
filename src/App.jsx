import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Arc from './components/Arc'
import Author from './components/Author'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Characters/>
      <Arc/>
      <Author/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
