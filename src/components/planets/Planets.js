import React, { Fragment } from "react";
import Planet from "./planet/planet"

async function getPlanets (){
    let response = await fetch('http://localhost:3000/planetas/planets.json')
    let data = response.json()
    return data
}

class Planets extends React.Component{
 constructor(props){
    super(props);
    this.state = {
      planets: []
    
 }
}
componentDidMount(){   // Esse método roda após a renderização;
    getPlanets().then(data => {
        this.setState(state =>({
            planets: data['planets']
        }))
    }) 
}

removeLast = () =>{
    let lastItem = this.state.planets.pop()
    let new_planets = [...this.state.planets]
    this.setState((state) => ({
        planet: new_planets
    }))

    return lastItem
    }

 render(){
    return(
        <Fragment>
             <h3>Planet List</h3>
            <button onClick={this.removeLast}>Remover o Ultimo Item</button>
            {
            this.state.planets.map((planet)=>
            <Planet
                id={planet.id}
                name={planet.name}
                img_url={planet.img_url}
                description={planet.description}
                link={planet.link}
            />
            )
            }
        </Fragment>
        )
    }          
}
export default Planets
