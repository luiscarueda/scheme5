import './App.css'
import React from 'react'
import { CTA, Footer,Possibility, WhatGPT3, Blog, Hero } from './containers'
import { Brand, Navbar } from './components'

const App = () => {
  return (
    <>
    <div className='gradient__bg'>
      <Navbar/>      
      <Hero/>         
    </div>
      <Brand/>
      <WhatGPT3/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    
    </>
  )
}

export default App
