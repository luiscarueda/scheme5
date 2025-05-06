import './possibility.css'
import React from 'react'
import { photo02 } from '../../constants/images';
import { POSSIBILITY } from '../../constants/data';

const Possibility = () => {
  return (
    <>
       <div className="gpt3__possibility section__padding" id="possibility">
         <div className="gpt3__possibility-image">
          <img src={POSSIBILITY.photo} alt="possibility" />
         </div>
       <div className="gpt3__possibility-content">
         <h4>{POSSIBILITY.tag}</h4>
         <h1 className="gradient__text">{POSSIBILITY.title}<br />{POSSIBILITY.title2}</h1>
         <p>{POSSIBILITY.description}</p>
         <h4>{POSSIBILITY.subtitle}</h4>
       </div>
     </div>    
    </>
  )
}

export default Possibility



