import testImage from '../../assets/images/banner.jpg'

export default function Card({ cardTitle, cardImage, gitHubUrl, deployedUrl }){
    return(
        <div className="card mt-2 border-dark">
            <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
                <img className="card-img-top" src={testImage}></img>
            </div>
            <div className="card-body">
                <a href={gitHubUrl} class="card-link">repo</a>
                <a href={deployedUrl} class="card-link">deployed</a>
            </div>
        </div>
    )
}