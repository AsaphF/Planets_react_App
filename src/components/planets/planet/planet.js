import React from "react";
import GrayImg from "../../shared/images/GrayImg";
import DescriptionWhitLink from "../../shared/description_whit_link"


async function getSattelites (id){
  let response = await fetch(`http://localhost:3000/planetas/${id}.json`)
  let data = response.json()
  return data
}

class Planet extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       satellites: []
     
  }
 }

componentDidMount(){   // Esse método roda após a renderização;
  getSattelites(this.props.id).then(data => {
      this.setState(state =>({
        satellites: data['satellites']
      }))
  })
}


render(){
    return (
      <div className="planet_section">
        <h4>{this.props.name}</h4>
        <GrayImg
          gray={false}
          src={this.props.img_url}
        />
        <DescriptionWhitLink
          description={this.props.description}
          link={this.props.link}
        />
        <h4>Satélites</h4>
        <ul>
          {this.state.satellites.map((satellite)=>
              <li>{satellite.name}</li>
          )}
        </ul>
      </div>
    )
  }          
 
}


export default Planet
