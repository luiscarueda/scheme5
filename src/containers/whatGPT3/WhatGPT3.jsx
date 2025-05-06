import './whatGPT3.css'
import React from 'react'
import { Feature } from '../../components'
import { FEATURE } from '../../constants/data'

const WhatGPT3 = () => {
  return (
    <>
     <div className="gpt3__whatgpt3 section__margin" id="wgpt3">    
       <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">SERVICES </h1>
        <p>QUE PODEMOS OFRECERTE PARA TU EMPRESA</p>
       </div>
       <div className="gpt3__whatgpt3-container">
        {FEATURE.map((item,index)=>(
          <Feature title={item.title}
                   text={item.description}
          />
        ))}       
       </div>
     </div>        
    </>
  )
}

export default WhatGPT3