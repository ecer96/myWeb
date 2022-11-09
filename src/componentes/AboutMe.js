import '../estilos/AboutMe.css'
import HtmlI from '../estilos/iconos/html-5.png'
import CssI from '../estilos/iconos/css-3.png'
import JsI from '../estilos/iconos/js.png'
import ReactI from '../estilos/iconos/atom.png'
import PythonI from '../estilos/iconos/python.png'
import JavaI from '../estilos/iconos/java.png'

function AboutMe(){
    return(
        <div className="About_Me" id='aboutMe'>
            <div className='Description'>
                <span id='AboutMeTxt'></span>
            </div>
            <h1 class='knowledge'>experience whit:</h1>
            <div class="container">
                <div><img id='ImgI' src={HtmlI} alt='img'/></div>
                <div><img id='ImgI' src={CssI} alt='img' /></div>
                <div><img id='ImgI' src={JsI} alt='img'/></div>
                <div><img id='ImgI' src={ReactI} alt='img'/></div>
                <div><img id='ImgI' src={PythonI} alt='img'/></div>
                <div><img id='ImgI' src={JavaI} alt='img'/></div>
                
            </div>
        </div>
    )
}

export default AboutMe;