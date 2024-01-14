import React from "react"
import '../../css/layout1.css'
import { useState, useEffect } from 'react'

interface Props {
  data: {layout:string,talent:string,age:string,country:string,province:string,
    gender:string, name:string,surname:string,cell:string, about:string,
    skills:string, education:string,workExperience:string,hobbies:string, socialmedia:string,
  photo:string,font:string }
}

const Layout1: React.FC<Props> = ({data}) => {

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
    <div  className="layout1">
        <button className='top animate-bounce' onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}>scrolltotop</button>
      <nav>
        <h1>navbar</h1>
        <p>{data.socialmedia}</p>
      </nav>
      <div className="banner">
        <div className="img left">
          <img src={data.photo} alt={data.photo} />
        </div>
        <div className="right">
          <h1>{data.name} {data.surname}</h1>
          <p>{data.gender}</p>
          <h2>{data.talent}</h2>
          <p>xyz@gmail.com</p>
          <p>kzn south africa</p>
          <p>font:{data.font}</p>
        </div>
      </div>
      <div className="about">
        <h1>about</h1>
        <p>{data.about}</p>
      </div>
      <div className="skillsandhobbies">
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
      </div>
      <div className="education">
        <div className="edu-box">
          <h1>decidio</h1>
          <p>positon : hahahha</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
          <h3>refernce</h3>
          <p>josh 061 149 8474</p>
        </div>
        <div className="edu-box">
          <h1>decidio</h1>
          <p>positon : hahahha</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
          <h3>refernce</h3>
          <p>josh 061 149 8474</p>
        </div>
      </div>
      <div className="we">
        <div className="we-box">
          <h1>rydalpark sec</h1>
          <p>degree</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
        </div>
        <div className="we-box">
          <h1>rydalpark sec</h1>
          <p>degree</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Earum tempore quae ratione explicabo in doloremque expedita 
             aspernatur perspiciatis eaque vel!
          </p>
          <p>12 december 2012 TO 13 april 2013</p>
        </div>
      </div>
      <div className="contact">
          <ul>
            <li>marco@email.com</li>
            <li>061 149 8474</li>
          </ul>
        </div>
    </div>
  )
}

export default Layout1

/*
      <img src={data.photo} alt={data.photo} height={100} width={100} />
      <h1>{data.layout}</h1>
      <p>{data.talent}</p>
      <p>{data.age}</p>
      <p>{data.country}</p>
      <p>{data.province}</p>
      <p>{data.gender}</p>
      <p>{data.name}</p>
      <p>{data.surname}</p>
      <p>{data.cell}</p>
      <p>{data.about}</p>
      <p>{data.skills}</p>
      <p>{data.education}</p>
      <p>{data.workExperience}</p>
      <p>{data.hobbies}</p>
      <p>{data.socialmedia}</p>
*/