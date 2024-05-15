import Card from "../../Card/card"

export default function Projects(){
    return(
        <div className="row text-center">
            <div className="col-sm-6 ">
                <Card cardTitle='Project 1'/>
            </div>
            <div className="col-sm-6">
                <Card cardTitle='Project 2'/>
            </div>
            <div className="col-sm-6">
                <Card cardTitle='Project 3'/>
            </div>
            <div className="col-sm-6">
                <Card cardTitle='Project 4'/>
            </div>
            <div className="col-sm-6">
                <Card cardTitle='Project 5'/>
            </div>
            <div className="col-sm-6">
                <Card cardTitle='Project 6'/>
            </div>
        </div>
    )
}