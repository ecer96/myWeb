import '../estilos/App.css';
import Particle from './Particle';
import Typeit from './typeit';
import miImagen from '../imagenes/miImagen.png'



function App() {
  return (
    <div className="App" id='index'>
       
        <Particle/>
      
    <div className='App-SobreMi'>
        <div className='Imagen'>
            <img className='miImagen' src={miImagen} alt="miImagen"></img>
        </div>

          <div className='SobreMi'>
            
            <h2 className='PresentacionH2'>&lt; Hello my name is:</h2>
            
            <h1 className='PresentacionH1'>Edwin Cervantes</h1>
            
            <h2 className="PresentacionH2"><span className='ImA'>and im a</span> <span className='typeIt' id='spanDev'><Typeit></Typeit></span></h2>
          
          </div>
    </div>
      
    
    </div>
  );
}

export default App;
