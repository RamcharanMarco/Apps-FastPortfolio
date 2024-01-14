import React from "react"
import '../../css/layout2.css'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

interface Props {
  data: {layout:string,talent:string,age:string,country:string,province:string,
    gender:string, name:string,surname:string,cell:string, about:string,
    skills:string, education:string,workExperience:string,hobbies:string, socialmedia:string,
  photo:string,font:string }
}

const Layout2: React.FC<Props> = ({data}) => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000){
      setVisible(true)
    } 
    else if (scrolled <= 1000){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

    const scrollToTopAuto = () => {
      window.scrollTo(0, 0)
  }

  useEffect(()=>{
      scrollToTopAuto()
  },[])

  
  window.addEventListener('scroll', toggleVisible);


  return (
    <div  className="layout2">
        <button 
        className='top animate-bounce' 
        onClick={scrollToTop}  
        style={{display: visible ? 'inline' : 'none'}}>
          scrolltotop
        </button>
        <div className="border">
        <nav>
          <h1>MR</h1>
          <div>
            <Link to='/'>home</Link>
            <Link to='/'>about</Link>
            <Link to='/'>skills</Link>
            <Link to='/'>contact</Link>
          </div>
        </nav>
        <div className="banner">
          <img src={data.photo} alt={data.photo} />
        </div>
        </div>
        <div className="about">
          <h1>about</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore animi atque debitis at qui quasi
             aliquam blanditiis perspiciatis, cum recusandae explicabo reiciendis facere.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore animi atque debitis at qui quasi
             aliquam blanditiis perspiciatis, cum recusandae explicabo reiciendis facere.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore animi atque debitis at qui quasi
             aliquam blanditiis perspiciatis, cum recusandae explicabo reiciendis facere.
             </p>
        </div>
        <div className="skills">
        <h1>skills</h1>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>wrethwthtt</li>
            <li>hefejwkekj</li>
          </ul>
        </div>
        <div className="hobbies">
          <h1>hobbies</h1>
        <ul>
            <li>playing soccer</li>
            <li>cricket</li>
            <li>volleyball</li>
            <li>netflix</li>
            <li>chilling</li>
          </ul>
        </div>
        <div className="eduandwe">
        <div className="we">
          <h1>Work Expereince</h1>
        <div className="we-box">
          <h1>decidio</h1>
          <h3>front end developer</h3>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
          <h3>refernce</h3>
          <p>josh 061 149 8474</p>
        </div>
        <div className="we-box">
          <h1>decidio</h1>
          <h3>backend developer</h3>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
          <h3>refernce</h3>
          <p>josh 061 149 8474</p>
        </div>
      </div>
      <div className="edu">
        <h1>Education</h1>
        <div className="edu-box">
          <h1>rydalpark sec</h1>
          <h3>degree</h3>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
        </div>
        <div className="edu-box">
          <h1>rydalpark sec</h1>
          <h3>degree</h3>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
        </div>
      </div>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <ul>
            <li>marco#gmail.com</li>
            <li>061 149 8474</li>
            <li>social media links</li>
          </ul>
        </div>
    </div>
  )
}

export default Layout2