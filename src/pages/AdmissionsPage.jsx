import React from "react"
import './AdmissionsPage.css'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Link } from "react-router-dom"

const AdmissionsPage = () => {
    return (
        <div className="o">
            <Header/>
            <div className="a" style={{ overflow: "auto" }}>
            <h1>Admissions at Vivekanand College</h1>
            <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
            <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
            <div>
            <h1 id="H">Eligibility Criteria for Undergraduate Programs</h1>
            <table className="q">
                <thead>
                    <tr>
                        <th>Program</th>
                        <th>Minimum Qualification</th>
                        <th>Required Subjects</th>
                        <th>Minimum Marks (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> B.Sc. Computer Science</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Physics, Chemistry, Maths</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>B.Com. Accounting & Finance</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Commerce Stream</td>
                        <td>45%</td>
                    </tr>
                    <tr>
                        <td>B.A. English Literature</td>
                        <td>10+2 (or equivalent)</td>
                        <td>Any Stream</td>
                        <td>40%</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <h5 id="H">Application Process</h5>
            <ol>
              <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li>  
              <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
              <li><strong>Entrance Exam (if applicable):</strong>Appear for the college's entrance examination.</li>
              <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
              <li><strong>Fee Payment: </strong>Complete the admission by paying the required fees.</li>
            </ol>
           <p> For detailed information on postgraduate program admissions, specifi program syllabi, and fee structures, please visit our
              <Link to="/coursespage"> CoursePage </Link> or
              <Link to="/contactpage"> ContactPage </Link> directly
                 </p>
        </div>
        <Footer/>
        </div>
    )
}

export default AdmissionsPage