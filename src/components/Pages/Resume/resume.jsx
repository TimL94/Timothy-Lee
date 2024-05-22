
// renders my relevant skills and allows user to download a copy of my resume.
export default function Resume(){
    return(
        <div className="">
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
            <a href='../../assets/pdf/Resume.pdf' download>
                <br></br><span>Click here</span>
            </a>
        </div>
    )
}