import React from 'react'
import './Home.css'
import hero from '../../assets/Yo.png'


const Home = () => {
  return (
    <div className='home'>
      <img src={hero} alt="" className='hero' />
      <ul className='description'>
        <li><h1>Hello I am <br /><span>David Bribiesca Valtierra</span></h1></li>
        <li>Computer Science Student @ITESM, expected grad date: May 2028</li>
        <li>Portfolio focused on Web Development, Data Science, Machine Learning</li>
        <li>
        The pupose of this website is to have a place were I can showcase all 
        the relevant projects I have done throughout my career
        </li>
        <li>
          <ul className='home-button'>
            <li className='contact'>Contact</li>
            <li className='resume'>Resume</li>
          </ul>
        </li>
      </ul>
      
    </div>
  )
}

export default Home