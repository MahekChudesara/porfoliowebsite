
import "./ContentStyles.css";
import React , {Component}from 'react'

class Contents  extends Component{

  render(){
    return (<>
      <div className="con">
    <div className="heading">
     <h1>{this.props.heading}</h1>
     <p>{this.props.text}</p>
   </div>
   </div>
 </>
  
 )
}

  }
  
export default Contents;