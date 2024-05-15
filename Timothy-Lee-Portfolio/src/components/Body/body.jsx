import { useState } from "react";
import Nav from "../Nav/nav.jsx";
import About from "../About/about.jsx";
import Home from "../Home/home.jsx";
import Contact from "../Contact/contact.jsx";
import Projects from "../Projects/projects.jsx";
import Resume from "../Resume/resume.jsx";


export default function Body() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        } else if (currentPage === 'About'){
            return <About />
        } else if(currentPage === 'Contact'){
            return <Contact />
        } else if(currentPage === 'Projects'){
            return <Projects />
        } else if(currentPage === 'Resume'){
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main className="mx-3">{renderPage()}</main>
        </div>
    )
}