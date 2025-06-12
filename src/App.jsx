import React from "react"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionsPage from "./pages/AdmissionsPage"
import {  BrowserRouter as Router,Routes, Route } from "react-router-dom"
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
const App = () => {
    return(
            <Router>
                <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path= "/aboutpage" element={<AboutPage/>}/>
                    <Route path="/coursespage" element={<CoursesPage/>}/>
                    <Route path="/contactpage" element={<ContactPage/>}/>
                    <Route path="/admissionspage" element={<AdmissionsPage/>}/>
                </Routes>
                </div>
                <ChatbotComponent/>
          </Router>
        
    )

}

export default App