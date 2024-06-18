import resumePDF from '../../../assets/pdf/Timothy-Lee.pdf'


// renders my relevant skills and allows user to download a copy of my resume.
export default function Resume(){
    return(
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div>
                <h3>
                    Stacks
                </h3>
                <ul>
                    <li>
                        MERN
                    </li>
                </ul>
                <h3>
                    Front End Skills
                </h3>
                <ul>
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                    <li>Handlebars</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>
                <h3>
                    Backend Skills
                </h3>
                <ul>
                    <li>SQL</li>
                    <li>MongoDb</li>
                    <li>MySQL</li>
                    <li>Insomnia</li>
                    <li>Express.js</li>
                    <li>Object Relational Mapping</li>
                    <li>PWA's</li>
                </ul>
            </div>
            to download a copy of my resume,
            <span><a href={resumePDF} download>
                Click Here
            </a></span>
        </div>
    )
}