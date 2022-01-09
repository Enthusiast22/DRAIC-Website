
  
import React from "react";
import "./About.css";



function About(){ 
    return (
    <>
  
  
  
  <div className="aboutmain">
    <div className="about-title"><p>About us</p></div>
    <div className="about-text"><p> I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
          transition and have heard some people who had an amazing experience here. I signed up
          for the free intro course and found it incredibly fun!</p></div>
    <div className="testimonial-grid">
      <article className="testimonial flow bg-secondary-400 text-neutral-100 ">
        <div className="flex">
          <div>
            <img  src="./images/image-daniel.jpg" alt=""/>
          </div>
          <div>
            <h2 className="name">Daniel Clifford</h2>
            
          </div>
        </div>
        
        <p className="position">
          “  I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
          The next 12 weeks was the best - and most grueling - time of my life. Since completing
          the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </article>
      <article className="testimonial flow bg-secondary-400 text-neutral-100">
        <div className="flex">
          <div>
            <img src="./images/image-jonathan.jpg" alt=" "/>
          </div>
          <div>
            <h2 className="name">Jonathan Walters</h2>
            
          </div>
        </div>
       
        <p className="position">
          “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
          for a big company. This was one of the best investments I’ve made in myself. ”
        </p>
      </article>
      </div>
      <div className="row2">
     
       <article className="testimonial grid-col-span-2 flow bg-secondary-400 text-neutral-100">
        <div className="flex">
          <div>
            <img src="./images/image-jeanette.jpg" alt=""/>
          </div>
          <div>
            <h2 className="name">Jeanette Harmon</h2>
            
          </div>
        </div>
        
        <p className="position">
          “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
          while doing something I love. ”
        </p>
      </article>
      
     
      
      <article className="testimonial  flow bg-secondary-500 text-neutral-100">
        <div className="flex">
          
          <div>
            <h2 className="name">Patrick Abrams</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
        
      </article>
      <article className="testimonial flow bg-secondary-400 text-neutral-100">
        <div className="flex">
        
          <div>
            <h2 className="name">Kira Whittle</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
       
    
      </article> 
     
      <article className="testimonial  flow bg-secondary-500 text-neutral-100">
        <div className="flex">
          
          <div>
            <h2 className="name">Patrick Abrams</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
       
       
      </article>
      <article className="testimonial flow bg-secondary-400 text-neutral-100">
        <div className="flex">
        
          <div>
            <h2 className="name">Kira Whittle</h2>
            <p className="position">Verified Graduate</p>
          </div>
        </div>
    
      </article> 
      </div>
    
    
    <div className="dept">
        <div className="dept-title"><p>OUR DEPARTMENTS</p></div>
        <div className="dept-grid">
        <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">
        
          <div>
          <img  src=" ./images/image-jeanette.jpg" />
          <p className="dept-name">Programming Department</p>
          </div>
          
        <div className="dept-content">
        <p>
          I received a job offer mid-course, and the subjects I learned were current, if not more so,
          in the company I joined. I honestly feel I got every penny’s worth.
        </p>
        </div>
     
      </article>
      <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">
        
        <div>
        <img  src=" ./images/image-jeanette.jpg" />
          <p className="dept-name">Programming Department</p>
        </div>
       
        <div className="dept-content">
      <p>
        I received a job offer mid-course, and the subjects I learned were current, if not more so,
        in the company I joined. I honestly feel I got every penny’s worth.
      </p>
      </div>
   
    </article>
    <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">
        
        <div>
          <img  src=" ./images/image-jeanette.jpg" />
          <p className="dept-name">Programming Department</p>
        </div>
        <div className="dept-content">
        <p>
        I received a job offer mid-course, and the subjects I learned were current, if not more so,
        in the company I joined. I honestly feel I got every penny’s worth.
      </p>
        </div>
      
      
      
   
    </article>
      </div>
      
    </div>
  
    </div>
 
</>

)}


export default About


