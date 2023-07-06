import ToHelpForm from '../../components/ToHelpForm/ToHelpForm'
import MiniCarrousel from '../../components/miniCarrousel/MiniCarrousel'
import './HowToHelp.scss'
import { useState, useEffect} from 'react'


function HowToHelp () {

    const [indice, setIndice] = useState(0)
    const [imagenActual, setImagenActual] = useState([])

    let images = [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gm-2ahC5LwtmNHO6PTxfUQHaEK%26pid%3DApi&f=1&ipt=9524df108291ea6c3ce8168aaf4d58d6afe0d8b84222ed8aaaf075e30727d795&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LLCrqSql4QlfFsjAiuUKjgHaEK%26pid%3DApi&f=1&ipt=278c448053af82a16887629aee7d7bcb4b15fbeab29c051401247a9031e42302&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FpRjUkTc.jpg&f=1&nofb=1&ipt=d4b25a3ee9de16e23560a1cf9a840c295308d3dc75fd9bb2f24a1b5291e15627&ipo=images"
    ]

    const cambiarImagen = (indice) => {
        setIndice(indice)
    }

    useEffect(() => {
        setImagenActual(images);
        let interval = setInterval(() => {
            setIndice(prevIndice => (prevIndice + 1) % images.length);
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae, ipsam rem deleniti laudantium saepe quibusdam nostrum nisi recusandae, explicabo obcaecati possimus a nesciunt provident. Praesentium excepturi unde fugiat deserunt.
                    </p>
                    <div className="miniCarrousel">
                        <MiniCarrousel indice={indice} imagenActual={imagenActual} cambiarImagen={cambiarImagen} btnTitulo="PROGRAMA VOLUNTARIOS" id="voluntarios"/>
                        <MiniCarrousel indice={indice} imagenActual={imagenActual} cambiarImagen={cambiarImagen} btnTitulo="PROGRAMA EMPRESAS" id="empresas"/>
                    </div>
                </div>
            </div>
            <div className="formulario">
                <div className="formulario__voluntarios">
                    <ToHelpForm titulo="VOLUNTARIOS" direccion="normal"
                    descripcion="HOLAAAAA MUNDO!!!!"
                    action="/pagina-no-existe"
                    id="voluntarios"
                    />
                </div>
                <div className="formulario__empresas">
                    <ToHelpForm titulo="EMPRESAS" direccion="reverse"
                    descripcion="ADIOS MUNDOOOOO!!!!"
                    action="/pagina-no-existe"
                    id="empresas"
                    />
                </div>
            </div>
        </div>
    )
}

export default HowToHelp;