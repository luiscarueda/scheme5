import './header.css'
import React from 'react'
import people from '../../assets/people.png';
import { HEADER } from '../../constants/data';
import { photo01 } from '../../constants/images';

const Header = () => {
  return (
    <>
        <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h4 className='gradient__text'>{HEADER.tag}</h4>
      <h1 className="gradient__text">{HEADER.title}</h1>
      <p>{HEADER.description}</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={photo01} />
    </div>
  </div>
    </>
  )
}

export default Header






  


