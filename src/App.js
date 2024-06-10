
import './App.css';
import Testimonio from "./componentes/testimonio";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los testimonios</h1>
        <Testimonio 
        nombre="Emma Wilson"
        imagen="emma"
        pais="Australia"
        puesto="Ingeniera de Software"
        empresa="Amazon"
        texto="Esto super agradecida de estudiar con esta escuela super increible. Lo elijo simpre y aprendo muchisimo, gracias!"/>
        <Testimonio 
        nombre="Matias Lopez"
        imagen="mati"
        pais="España"
        puesto="Ingeniera de Informatica"
        empresa="Apple"
        texto="Recomiendo mucho este curso online para poder aprender y volverse un experto, 
        me ayudo muchisimo, gracias!, que tengas buen dia"/>
        <Testimonio 
        nombre="Lora Marquez"
        imagen="lora"
        pais="Londres"
        puesto="Desarrolladora de aplicaciones"
        empresa="Google"
        texto="Recomiendo mucho este curso online para poder aprender y volverse un experto, 
        me ayudo muchisimo, gracias!, que tengas buen dia"/>
        
      </div>
    </div>
  );
}

export default App;
