import { useState } from 'react'
import './projects.css'


function Content(props){
    return(
      <section className='projectContentContainer'>
      <div className='projectContent'>
      <h2>{props.name}</h2>
      <img src={props.src} alt={props.name}_logo className='imageTag'/>
      </div>
      </section>
    )
}

function Overview(){
    return(
      <div className='overviewContainer'>
        <h1></h1>
        <h3></h3>
        <button>Live demo</button>
        <h4>Challenges</h4>
        <ol>
          <li></li>
          <li></li>
        </ol>
      </div>
    )
}

function Projects() {
  
const images = [["Habni",'./Place 1.jpg'],["Lolsi",'./Place 2.jpg'],['Idek','./Place 3.jpg'],['Pera','./Place 4.jpg']]
  return (
    <div className='projectsContainer'>
      <h1>My Work</h1>
      {images.map((data)=> {
        return <Content name={data[0]} src={data[1]}/>
      })}
      
      <Overview/>
    </div>
  )
}

export default Projects;
