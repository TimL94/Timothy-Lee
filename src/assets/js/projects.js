import relocare from '../images/relocare-banner.jpg'
import dateAdvisor from '../images/date-advisor (2).jfif'
import weather from '../images/weatherdashboard.jfif'
import techBlog from '../images/techblog.jfif'
import quiz from '../images/codingquiz.jfif'
import schedule from '../images/schedule.jfif'
import jobCred from '../images/jobcred.svg'

// after all images are imported an object is created and exported for each project to be used in the projects component
export const projects = [
    {
        project_title: 'Job Cred',
        repo: 'https://github.com/TimL94/Job-Cred',
        deployedUrl: 'https://job-cred.onrender.com/',
        image: jobCred,
        project_id: 1
    },
    {
        project_title: 'Relocare',
        repo: 'https://github.com/TimL94/ReloCare',
        deployedUrl: 'https://relocare-628a0d030565.herokuapp.com/login',
        image: relocare,
        project_id: 2
    },
    {
        project_title: 'Date Advisor',
        repo: 'https://github.com/TimL94/Date-Advisor',
        deployedUrl: 'https://timl94.github.io/Date-Advisor/',
        image: dateAdvisor,
        project_id: 3
    },
    {
        project_title: 'Weather Dashboard',
        repo: 'https://github.com/TimL94/Weather-Dashboard',
        deployedUrl: 'https://timl94.github.io/Weather-Dashboard/',
        image: weather,
        project_id: 4
    },
    {
        project_title: 'Tech Blog',
        repo: 'https://github.com/TimL94/Tech-Blog',
        deployedUrl: 'https://arcane-badlands-97474-d697b1ad847b.herokuapp.com/',
        image: techBlog,
        project_id: 5
    },
    {
        project_title: 'Coding Quiz',
        repo: 'https://github.com/TimL94/Coding-Quiz',
        deployedUrl: 'https://timl94.github.io/Coding-Quiz/',
        image: quiz,
        project_id: 6
    },
    {
        project_title: 'Work Day Scheduler',
        repo: 'https://github.com/TimL94/Work-Day-Scheduler',
        deployedUrl: 'https://timl94.github.io/Work-Day-Scheduler/',
        image: schedule,
        project_id: 7
    },
]
