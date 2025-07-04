import React from "react"
import Header from "../components/Header/Header"
import './HomePage.css'
import Footer from "../components/Footer/Footer"
import { Link } from "react-router-dom"
const HomePage = () => {
    return (
      <div className="o" >
          <Header/>
          <div className="f a" style={{overflow:"auto"}}>
         <div className="a">
              <img src="\Images\1.jpeg" alt="vivekanand college campus" className="h"/>
          <div className="g">
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <Link to='/admissionspage'> <button id="A">Apply Now!</button></Link>
          </div>
         </div>
            <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2 id="H"> Why Choose Vivekanand College?</h2>
            <ul>
              <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
              <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
              <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
              <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
              <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
          </ul>
          <h3>Campus Life & Facilities</h3>
          <div>
          <img src="/Images/3.jpeg" alt="Campus View 1" className="k" />
          <img src="/Images/4.jpg" alt="campus view 2" className="j" />
          </div>
          <div  className="i">
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
          <h4>Ready to explore our courses?</h4>
           <Link to="/coursespage"><button id="A">Explore Courses</button></Link> 
           </div>
           </div>
          <Footer/>
     </div>
        
   )
}

export default HomePage