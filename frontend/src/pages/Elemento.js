// import React from "react";
// import axios from 'axios'
// import Header from "../components/Header";



//  class Elemento extends React.Component{

//     constructor(props){
//     super(props)}

//     state = {elemento:{name: '-',img:"-"}}
//     endpoint = this.props.params.endpoint
//     id = this.props.params.id

//     componentDidMount() {
//         axios.get('http://localhost:4000/api/cities/'+this.id)
//         .then(response => this.setState({elemento:response.data.respuesta}))
//     }

//     render() { 
//         return (
//         <div className="element">
//             <Header/>
//             <h1>{this.state.elemento.name}</h1>
//             <img src={this.state.elemento.img}/>
           
//             </div>
//             )
//     }
// }

// export default Elemento;