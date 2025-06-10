import React from "react"
import './AdmissionsPage.css'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const AdmissionsPage = () => {
    return (
        <div>
            <Header/>
            <div>
            <h1>Admissions at Vivekanand College</h1>
            <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
            <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
            <h2>Eligibility Criteria for Undergraduate Programs</h2>
            <table id="e">
                <thead id="e">
                    <tr id="e">
                        <th id="e">Program</th>
                        <th id="e">Minimum Qualification</th>
                        <th id="e">Required Subjects</th>
                        <th id="e">Minimum Marks (%)</th>
                    </tr>
                </thead>
                <tbody id="e">
                    <tr id="e">
                        <tb id="e"> B.Sc. Computer Science</tb>
                        <tb id="e">10+2 (or equivalent)</tb>
                        <tb id="e">Physics, Chemistry, Maths</tb>
                        <tb id="e">50%</tb>
                    </tr>
                    <tr id="e">
                        <tb id="e">B.Com. Accounting & Finance</tb>
                        <tb id="e">10+2 (or equivalent)</tb>
                        <tb id="e">Commerce Stream</tb>
                        <tb id="e">45%</tb>
                    </tr>
                    <tr id="e">
                        <tb id="e">B.A. English Literature</tb>
                        <tb id="e">10+2 (or equivalent)</tb>
                        <tb id="e">Any Stream</tb>
                        <tb id="e">40%</tb>
                    </tr>
                </tbody>
            </table>
            <h5>Application Process</h5>
            <ol>
              <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li>  
              <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
              <li><strong>Entrance Exam (if applicable):</strong>Appear for the college's entrance examination.</li>
              <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
              <li><strong>Fee Payment: </strong>Complete the admission by paying the required fees.</li>
            </ol>
            <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our CoursesPage or Contact us directly.</p>
        </div>
        <Footer/>
        </div>
    )
}

export default AdmissionsPage