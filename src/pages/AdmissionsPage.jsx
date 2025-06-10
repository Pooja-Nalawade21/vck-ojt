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
            <div className="e">
            <h2 className="r">Eligibility Criteria for Undergraduate Programs</h2>
            <table className="b">
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
                        <tb> B.Sc. Computer Science</tb>
                        <tb>10+2 (or equivalent)</tb>
                        <tb>Physics, Chemistry, Maths</tb>
                        <tb className="p">50%</tb>
                    </tr>
                    <tr>
                        <tb>B.Com. Accounting & Finance</tb>
                        <tb>10+2 (or equivalent)</tb>
                        <tb>Commerce Stream</tb>
                        <tb className="p">45%</tb>
                    </tr>
                    <tr>
                        <tb>B.A. English Literature</tb>
                        <tb>10+2 (or equivalent)</tb>
                        <tb>Any Stream</tb>
                        <tb className="p">40%</tb>
                    </tr>
                </tbody>
            </table>
            </div>
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