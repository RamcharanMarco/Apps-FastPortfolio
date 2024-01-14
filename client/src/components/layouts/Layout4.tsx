import React from "react"
import '../../css/layout4.css'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

interface Props {
  data: {layout:string,talent:string,age:string,country:string,province:string,
    gender:string, name:string,surname:string,cell:string, about:string,
    skills:string, education:string,workExperience:string,hobbies:string, socialmedia:string,
  photo:string,font:string }
}

const Layout4: React.FC<Props> = ({data}) => {

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
    <div  className="layout4">
        <button className='top animate-bounce' onClick={scrollToTop}  style={{display: visible ? 'inline' : 'none'}}>scrolltotop</button>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/'>about</Link>
            <Link to='/'>contact</Link>
            <Link to='/'>skills</Link>
        </nav>
        <div className="banner">
            <h1>{data.name}</h1>
            <h1>{data.surname}</h1>
            {/*ask user to enter a shrot description of themselves*/}
            <p>I am a software developer, photographer and a raedent leaner who is always learning nad creating new stuff.<br></br>
            lets start scrolling and learn about me.
            </p>
            <hr />
            <h2>{data.socialmedia}</h2>
            <button>to scroll down</button>
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
        <div className="about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio nisi sit illum hic 
               necessitatibus velit, ab maiores quidem veniam quaerat! Rem asperiores fugit dolorem minus tenetur
               iure voluptas ab, molestiae mollitia quia blanditiis vitae eligendi doloribus aperiam sapiente tempore.
            </p>
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
      <div className="personalinfo">
        <h1>Personal Info</h1>
        <p>age {data.age}</p>
        <p>gender {data.gender}</p>
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

export default Layout4