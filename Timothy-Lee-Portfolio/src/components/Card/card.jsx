import testImage from '../../assets/images/banner.jpg'
import './card.css'

export default function Card({ cardTitle, cardImage, gitHubUrl, deployedUrl, image }){
    return(
        <div className="card mt-2 border-dark">
            <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
                <img className="card-img-top card-img border border-dark" src={image}></img>
            </div>
            <div className="card-body custom-div">
                <a href={gitHubUrl} class="card-link" target='_blank'>Repository</a>
                <a href={deployedUrl} class="card-link" target='_blank'>Deployed Application</a>
            </div>
        </div>
    )
}