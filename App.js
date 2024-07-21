
import './App.css';

import Genarate from './component/Genartor';
import Speed from './component/Speed';
import Country from './component/Country';
const random=[{
  id :0,
  random:"random number",
  descrption:"genarate random number in the range if 1 to 100",
  value:"genrator"
},

]

function App() {
  // const{normal}=random;
  // console.log(normal.random[0].id)
  
  return (

    <div className="App">

    
      <ul className='image'>
        {
        random.map(random=>(
          <Genarate random={random} key={random.id} />
        )   
        )
      }
      </ul>
        <Speed/>
     <Country/>
         
    </div>
   
  );
}

export default App;
