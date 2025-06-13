import react from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const ContactPage = () => {
    return (
        <div className="o">
            <Header/>
            <div className="a" style={{overflow:"auto"}}>
            <h1 className="v">Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2 id="H">General Enquiries</h2>
            <p>Vivekanand College kolhpur tarabai chouk,nagala park,E-ward karvir-416003 India</p>
            <p>Phone: **+91 12345 67890**
Email: **info@vivekanandcollege.edu**
Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            <h3 id="H">Admissions Office</h3>
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:
Phone: +91 98765 43210
Email: admissions@vivekanandcollege.edu</p>
            <h4 id="H">Student Support Services</h4>
            <p>For current student support, academic advising, or general assistance:
Phone: +91 87654 32109
Email: studentsupport@vivekanandcollege.edu</p>
            <p><a href="https://maps.app.goo.gl/BsPuFTYEf3PsH7AZ7" target="_blank">Find Us on the Map</a> click here for to get the address of our college </p>
            <h6 id="H">Send Us a Message</h6>
            <p>Email: studentsupport@vivekanandcollege.edu</p>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage