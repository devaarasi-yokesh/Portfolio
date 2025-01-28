import { useState } from 'react'


function Header(){
  return(
    <div className='header'>
      <div className='logoContainer'>
          <h1>DEVA</h1>
      </div>
      <nav className='homeNavBar'>
        <ul>
          <li><a href="">Work</a></li>
          <li><a href="">Skills</a></li>
        </ul>
      </nav>
    </div>
  )
}

function Content(){
  return(
    <div className='contentContainer'>
      <div className='butterflyContainer'>
        <img src="/butterfly.svg" alt="butterfly_design" />
      </div>
      <div className='designationContainer'>
        <h3>Front-end Developer</h3>
        <h3>UI/UX Designer</h3>
      </div>
      <div className='contactContainer'>
        <img src="/linkedin.svg" alt="linkedin_logo"/>
        <img src="/github.svg" alt="github_logo"/>
        <img src="/gmail.svg" alt="gmail_logo"/>
        <img src="/phone.svg" alt="phone_logo"/>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Header/>
      <Content/>
    </>
  )
}

export default Home;
