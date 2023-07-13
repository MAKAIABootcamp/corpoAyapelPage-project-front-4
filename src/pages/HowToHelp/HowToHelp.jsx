import ToHelpForm from '../../components/ToHelpForm/ToHelpForm'
import MiniCarrousel from '../../components/miniCarrousel/MiniCarrousel'
import './HowToHelp.scss'
import { useState, useEffect} from 'react'
import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import { Helmet } from 'react-helmet';


function HowToHelp () {

    const [indice1, setIndice1] = useState(0)
    const [indice2, setIndice2] = useState(0)
    const [imagenActual1, setImagenActual1] = useState([])
    const [imagenActual2, setImagenActual2] = useState([])

    let images = [
        "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688153550/slide-1_fgfpri.jpg",
        "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688177236/paisa-1_sxyk42.jpg",
        "https://res.cloudinary.com/dgnwqr93n/image/upload/v1688314974/slide-artesanos_kgzl9e.png"
    ]

    let images2 = [
        "https://corpoayapel.org/wp-content/uploads/2020/01/nosotros-02.jpg",
        "https://corpoayapel.org/wp-content/uploads/2020/01/nosotros-01.jpg",
        "https://corpoayapel.org/wp-content/uploads/2020/01/galeria-4-1.jpg"
    ]

    const cambiarImagen1 = (indice) => {
        setIndice1(indice)
    }
    
    const cambiarImage2 = (indice) => {
        setIndice2(indice)
    }

    useEffect(() => {
        setImagenActual1(images);
        setImagenActual2(images2);
        let interval = setInterval(() => {
            setIndice1(prevIndice => (prevIndice + 1) % images.length);
            setIndice2(prevIndice => (prevIndice + 1) % images2.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="toHelp">
            <div className="toHelp__Banner">
                <div className="toHelp__Content">
                    <p className="toHelp__p">
                        Tu contribución es crucial para transformar Ayapel en todos los aspectos. Cada aporte nos ayuda a seguir trabajando sin fines de lucro y a cumplir nuestra misión. Descubre cómo puedes contribuir y únete a nuestro movimiento de cambio.
                    </p>
                    <div className="miniCarrousel">
                        <MiniCarrousel indice={indice1} imagenActual={imagenActual1} cambiarImagen={cambiarImagen1} btnTitulo="PROGRAMA VOLUNTARIOS" id="voluntarios"/>
                        <MiniCarrousel indice={indice2} imagenActual={imagenActual2} cambiarImagen={cambiarImage2} btnTitulo="PROGRAMA EMPRESAS" id="empresas"/>
                    </div>
                </div>
            </div>
            <div className="formulario">
                <HubspotProvider>
                    <div className="formulario__voluntarios" id="voluntarios">
                        <ToHelpForm titulo="VOLUNTARIOS" direccion="normal"
                        descripcion="¿Quieres ir a ayudar y formar parte de la transformación de Ayapel? Llena este formulario para que estés al tanto de cómo ayudar a la comunidad de Ayapel."
                        list={[]}
                        imgURL="https://corpoayapel.org/wp-content/uploads/2020/01/slide-2.jpg"
                        />
                    </div>
                    <div className="formulario__empresas" id="empresas">
                        <ToHelpForm titulo="EMPRESAS" direccion="reverse"
                        descripcion="Si tienes una empresa con inquietudes sociales, ambientales y económicas y tienes ganas de aportar tu granito de arena, tenemos varios planes para ti:"
                        list={["Acompañamiento/patrocinio en viajes con influenciadores", "Colaboraciones con sentido", "Co-creación de campañas", "Donaciones voluntarias"]}
                        imgURL="https://corpoayapel.org/wp-content/uploads/2020/01/slide-3.jpg"
                        />
                    </div>
                </HubspotProvider>
            </div>

            <Helmet title='¿Como Puedo Ayudar? - Corpo Ayapel'/>
        </div>
    )
}

export default HowToHelp;