import './App.css'
import React from 'react'
import { CTA, Footer, Header, Possibility, WhatGPT3, Blog } from './containers'
import { Brand, Navbar } from './components'




const App = () => {
  return (
    <>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>         
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
