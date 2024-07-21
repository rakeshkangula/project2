import {Component} from "react"
class Speed extends Component{
    state={count:0}
    onacelator=()=>{
    const{count}=this.state
   
        if(count<200){
        this.setState((prevState) =>
        ({count:prevState.count+10})
        )
    }
    }
    
    onacelators=()=>{
        const{count}=this.state
        if(count>0){
        this.setState((prevState) =>
        ({count:prevState.count-10})
        )
    }
    }
    
    render(){

        const{count}=this.state;
    
       return (
        <div>
            <div className="back"> 
        <img className="meter" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESGbInjzHIoOcDsCW9R6yqbQ9wHcYPBUUGg&s'/>
       
       <h1 className="text-white">speed is <span>{count}</span>mph</h1>
      
        <p className="text-white">min limiti is 0mph and max limit 200mph</p>
        <div >
            <button className="btn btn-primary" onMouseMove={this.onacelator}>acelarator</button>

            <button className="m-4 over" onMouseMove={this.onacelators}>Apply Break</button>
         </div>
        </div>
        
        </div>
        )
    }
}
export default Speed;