import './brand.css'
import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <>
    
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>

    </>
  )
}

export default Brand