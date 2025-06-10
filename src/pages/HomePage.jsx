import React from "react"
import Header from "../components/Header/Header"
import './HomePage.css'
import Footer from "../components/Footer/Footer"
import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <div id="U">
          <Header/><br></br><br></br>
          <div id="F">
            <div id="C">
            <h1 id="A"><strong>Welcome to Vivekanand College!</strong></h1>
            <p id="A">Your journey to excellence starts here.</p><br></br>
            
          <Link to='/admissionspage'> <button>Apply Now!</button></Lin>
            
            </div>
          <div>
            <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2>
            <ul>
              <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
              <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
              <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
              <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
              <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
          </ul>
          <h3>Campus Life & Facilities</h3>
          <img src="/Images/3.jpeg" alt="Campus View 1"id="D"/><br></br>
          <img src="/Images/4.jpg" alt="Campus View 2"id="E"/>
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
          <h4>Ready to explore our courses?</h4>
          </div>
          <button id="L">Explore Courses</button>
          </div><br></br><br></br>
          <Footer/>
          </div>
        
        
    )
}

export default HomePage