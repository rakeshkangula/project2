import {Component} from "react"
class Genarate extends Component {
    state={count:0}
    random1=()=>{
        this.setState((prevState) =>
    ({count:prevState.count=Math.floor((Math.random()*1000))})
          )
        
    }
    render(){
        const{count}=this.state
        const{random}=this.props;
        console.log(random);
return(
    <div className="container p-5">
    <div className="background p-3 m-5">
    <h6>{random.random}</h6>
    <p>{random.descrption}</p>
    <h1>{count}</h1>
    <button onClick={this.random1}>{random.value}</button>
    </div>
    </div>
)
    }
       
    
}
export default Genarate;