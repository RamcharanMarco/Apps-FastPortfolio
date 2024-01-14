import React from "react"
import '../../css/layout3.css'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

interface Props {
  data: {layout:string,talent:string,age:string,country:string,province:string,
    gender:string, name:string,surname:string,cell:string, about:string,
    skills:string, education:string,workExperience:string,hobbies:string, socialmedia:string,
  photo:string,font:string }
}

const Layout3: React.FC<Props> = ({data}) => {

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
    <div  className="layout3">
        <button 
        className='top animate-bounce' 
        onClick={scrollToTop}  
        style={{display: visible ? 'inline' : 'none'}}>
          scrolltotop
        </button>
        <nav>
          <h1>{data.talent}</h1>
          <div className="links">
            <Link to='/'>home</Link>
            <Link to='/'>about</Link>
            <Link to='/'>skills</Link>
            <Link to='/'>contact</Link>
          </div>
        </nav>
        <div className="banner">
          <div className="left">
            <h1>{data.name} {data.surname}</h1>
            <hr />
            <p>{data.talent}</p>
            <p>{data.socialmedia}</p>
          </div>
          <div className="right img">
            <img src={data.photo} alt={data.photo} />
          </div>
        </div>
        <div className="about">
          <h1>About</h1>
          <hr />
          <p className='about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus 
            saepe aspernatur inventore sed, ad reprehenderit recusandae at maiores molestiae 
            soluta harum, perspiciatis cumque facilis rem culpa maxime ab facere!
            saepe aspernatur inventore sed, ad reprehenderit recusandae at maiores molestiae 
            soluta harum, perspiciatis cumque facilis rem culpa maxime ab facere!
            </p>
            <h3>age ...{ data.age}</h3>
            <h3>location ... {data.province} {data.country}</h3>
            <h3>gender ... {data.gender}</h3>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>skill1</li>
            <li>skill2</li>
            <li>skill3</li>
            <li>skill4</li>
            <li>skill5</li>
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
        <div className="hobbies">
          <h1>Hobbies</h1>
          <ul>
            <li>hobbie1</li>
            <li>hobbie2</li>
            <li>hobbie3</li>
            <li>hobbie4</li>
            <li>hobbie5</li>
          </ul>
        </div>
        <div className="contact">
          <h1>Say Hi!</h1>
          <h2>marco@gmail.com</h2>
          <h2>061 149 8474</h2>
        </div>
    </div>
  )
}

export default Layout3