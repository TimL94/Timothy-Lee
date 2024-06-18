import me from '../../../assets/images/self.jpg'
import './about.css'

// renders an image of myself and a short paragraph
export default function About() {
    return(
        <div className="row d-flex flex-column justify-contnet-center align-items-center">
            <div className="col-sm-4">
                <h1 className='text-center'>
                    About Me
                    <img src={me} className='custom-img mt-2 border border-dark border-round'></img>
                </h1>
            </div>
            <div className="col-sm-7 m-1 text-center">
                    <p>
                        My name is Timothy Lee, I am a 30 year old aspiring software developer from New Hampshire.
                        I was first introduced to software development by my father through first robotics. 
                        My father is a developer and was the coach of the team, I had a lot of fun working on the robots and competing.
                        it wasn't until I turned 24 that I started really looking into a career change into tech.
                        My first step was acquiring a computer science degree from Great Bay Community College.
                        My next step to further my learning was taking and completing the full stack development
                        bootcamp through UNH. I am planning to become AWS certified once the course is completed
                        and then I will be applying for junior dev jobs.
                    </p>

            </div>
        </div>
    )
};