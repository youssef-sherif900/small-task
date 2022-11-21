
import './App.css';
import logo from "./images/logo.png";
import Img from './components/img';
import shrimpD from "./images/shrimp-draw.png"
import shrimp from "./images/shrimp.png"
import resD from './images/res-draw.png'
import res from "./images/res.png"

function App() {


  setTimeout(() => {
    document.querySelector("#firstSection").style.opacity="0";
    document.querySelector("#secondSection").style.opacity="1";
  }, 2300);

  return (
    <div className="App">
    <section className='window' id='firstSection'>
    <img src={logo}  className="App-logo" alt='shrimp'/>
    </section>
    <section className='window' id='secondSection'>
    <div className='bigContainer'>
      <h1 style={{marginBottom:"30px",padding:"0"}}>Welcome</h1>
      <div className='sideImg' >
      <Img name={"img1"} image={shrimpD} change={shrimp}/>
      <Img name={"img2"} image={resD} change={res} />
      </div>
      </div>
 
      
    </section>

    </div>
  );
}

export default App;
