import React from "react"
import LoremIpsum from "./components/LoremIpsum"
import Planets from "./components/planets/Planets"


//Componente class.
// class HelloWorld extends React.Component{
//   render() {
//     return <h1>Hello World</h1>
//   }
// }

//Component Function

const HelloWorld = () =>{
    return( 
      <h1>Hello World</h1>
    ) 
  }

  function App() {
    return (
      <>
        <Planets/>
      </>
    );
  }
  export default App;
