import { useState } from "react";
import './nav.css'


export default function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info p-4">
                <a 
                className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'} 
                href="#Home"
                onClick={() => handlePageChange('Home')}
                >
                    Timothy Lee
                    </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a 
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} 
                        href="#Projects"
                        onClick={() => handlePageChange('Projects')}
                        >
                            Projects
                            </a>
                    </li>
                    <li className="nav-item">
                        <a 
                       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                       href="#About"
                       onClick={() => handlePageChange('About')}
                        >
                            About
                            </a>
                        </li>
                    <li className="nav-item">
                        <a 
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        >
                            Contact
                            </a>
                    </li>
                    <li className="nav-item">
                        <a 
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                        href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                        >
                            Resume
                            </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}