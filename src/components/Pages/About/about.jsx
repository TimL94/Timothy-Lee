import me from '../../../assets/images/me.png'
import './about.css'

// renders an image of myself and a short paragraph
export default function About() {
    return(
        <div className="row d-flex text-center">
            <div className="col-sm-4">
                <h1>
                    <img src={me} className='custom-img mt-2'></img>
                </h1>
            </div>
            <div className="col-sm-7 m-1">
                <h5 className='text-left'>
                    My name is Timothy Lee, I am a 30 year old aspiring software developer from New Hampshire.
                    I was first introduced to software development by my father through first robotics. 
                    My father is a developer and was the coach of the team, I had a lot of fun working on the robots and competeing.
                    it wasn't until I turned 24 that I started really looking into a career change into tech.
                    My first step was aquiring a computer science degree from Great Bay Community College.
                    My next step to further my learning was taking and completeing the full stack development
                    bootcamp through UNH. I am planning to become AWS certified once the course is completed
                    and than I will be applying for junior dev jobs.

                </h5>
            </div>
        </div>
    )
};