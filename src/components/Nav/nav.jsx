import './nav.css'

export default function Nav({ currentPage, handlePageChange }) {

    // renders the nav bar and upadtes nav elements depending on which page is the current.
    // current page text is changed from black to white to indicate that it is active
    // also passes current page info up to the body component
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info p-4">
                <a 
                className= {currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                href="#About"
                onClick={() => handlePageChange('About')}
                >
                    Timothy Lee
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                            <li className="nav-item">
                                <a 
                                className={currentPage === 'Projects' ? 'nav-link active text-light' : 'nav-link'} 
                                href="#Projects"
                                onClick={() => handlePageChange('Projects')}
                                >
                                    Projects
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a 
                            className={currentPage === 'About' ? 'nav-link active text-light' : 'nav-link'} 
                            href="#About"
                            onClick={() => handlePageChange('About')}
                                >
                                    About
                                    </a>
                                </li>
                            <li className="nav-item">
                                <a 
                                className={currentPage === 'Contact' ? 'nav-link active text-light' : 'nav-link'} 
                                href="#Contact"
                                onClick={() => handlePageChange('Contact')}
                                >
                                    Contact
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                className={currentPage === 'Resume' ? 'nav-link active text-light' : 'nav-link'} 
                                href="#Resume"
                                onClick={() => handlePageChange('Resume')}
                                >
                                    Resume
                                    </a>
                            </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}