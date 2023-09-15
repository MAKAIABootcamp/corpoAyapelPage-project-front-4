import ToHelpForm from "../../components/ToHelpForm/ToHelpForm";
import MiniCarrousel from "../../components/miniCarrousel/MiniCarrousel";
import "./HowToHelp.scss";
import { useState, useEffect } from "react";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import { Helmet } from "react-helmet";
import client from "../../sanity/client";

function HowToHelp({ BackGroundVoluntarios, BackGroundEmpresas, BackGroundBanner }) {
  const [indice1, setIndice1] = useState(0);
  const [indice2, setIndice2] = useState(0);
  const [imagenActual1, setImagenActual1] = useState([]);
  const [imagenActual2, setImagenActual2] = useState([]);
  const [backgroundData, setBackgroundData] = useState([]);

  let voluntarios = [
    "https://res.cloudinary.com/lm-galery/image/upload/v1689465008/voluntarios/WhatsApp_Image_2023-07-13_at_4.25.10_PM_1_sjndqf.jpg",
    "https://res.cloudinary.com/lm-galery/image/upload/v1689465005/voluntarios/WhatsApp_Image_2023-07-13_at_4.25.10_PM_bjx7pr.jpg",
    "https://res.cloudinary.com/lm-galery/image/upload/v1689465010/voluntarios/WhatsApp_Image_2023-07-13_at_4.25.10_PM_2_yfsgfa.jpg",
  ];

  let empresas = [
    "https://res.cloudinary.com/lm-galery/image/upload/v1689465066/empresas/WhatsApp_Image_2023-07-13_at_4.25.10_PM_3_qnqlxp.jpg",
    "https://res.cloudinary.com/lm-galery/image/upload/v1689465067/empresas/WhatsApp_Image_2023-07-13_at_4.25.10_PM_4_carya0.jpg",
    "https://res.cloudinary.com/lm-galery/image/upload/v1689465068/empresas/WhatsApp_Image_2023-07-13_at_4.25.10_PM_5_fko2lc.jpg",
  ];

  const cambiarImagen1 = (indice) => {
    setIndice1(indice);
  };

  const cambiarImage2 = (indice) => {
    setIndice2(indice);
  };

  useEffect(() => {
    client
        .fetch(
            `*[_type == "paginas" && titulo == "Como Ayudar"] {
          titulo,
          
          fondos[]{
            asset->{
              url
            }
            
          }
        }`
        )
        .then((data) => setBackgroundData(data))
        .catch(console.error);

   

    setImagenActual1(voluntarios);
    setImagenActual2(empresas);
    let interval = setInterval(() => {
      setIndice1((prevIndice) => (prevIndice + 1) % voluntarios.length);
      setIndice2((prevIndice) => (prevIndice + 1) % empresas.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const mapBackGround = backgroundData.map((background) => {
    return background;
  });
  console.log(mapBackGround)

  return (
    <div className="toHelp">
      <div className="toHelp__Banner sec" style={{ backgroundImage: `url('${mapBackGround[0]?.fondos[0]?.asset.url}')`}}>
        <div className="toHelp__Content">
          <p className="toHelp__p">
            Tu contribución es crucial para transformar Ayapel en todos los
            aspectos. Cada aporte nos ayuda a seguir trabajando sin fines de
            lucro y a cumplir nuestra misión. Descubre cómo puedes contribuir y
            únete a nuestro movimiento de cambio.
          </p>
          <div className="miniCarrousel">
            <MiniCarrousel
              indice={indice1}
              imagenActual={imagenActual1}
              cambiarImagen={cambiarImagen1}
              btnTitulo="Programa Voluntarios"
              id="voluntarios"
            />
            <MiniCarrousel
              indice={indice2}
              imagenActual={imagenActual2}
              cambiarImagen={cambiarImage2}
              btnTitulo="Programa Empresas"
              id="empresas"
            />
          </div>
        </div>
      </div>
      <div className="formulario">
        <HubspotProvider>
          <div
            className="formulario__voluntarios sec"
            id="voluntarios"
            style={{ backgroundImage: `url('${mapBackGround[0]?.fondos[1]?.asset.url}')`}}
          >
            <ToHelpForm
              titulo="Voluntarios"
              direccion="normal"
              descripcion="¿Quieres ir a ayudar y formar parte de la transformación de Ayapel? Llena este formulario para que estés al tanto de cómo ayudar a la comunidad de Ayapel."
              list={[]}
              imgURL="https://res.cloudinary.com/lm-galery/image/upload/v1689465005/voluntarios/WhatsApp_Image_2023-07-13_at_4.25.10_PM_bjx7pr.jpg"
            />
          </div>
          <div
            className="formulario__empresas sec"
            id="empresas"
            style={{ backgroundImage: `url('${mapBackGround[0]?.fondos[2]?.asset.url}')`}}
          >
            <ToHelpForm
              titulo="Empresas"
              direccion="reverse"
              descripcion="Si tienes una empresa con inquietudes sociales, ambientales y económicas y tienes ganas de aportar tu granito de arena, tenemos varios planes para ti:"
              list={[
                "Acompañamiento/patrocinio en viajes con influenciadores",
                "Colaboraciones con sentido",
                "Co-creación de campañas",
                "Donaciones voluntarias",
              ]}
              imgURL="https://res.cloudinary.com/lm-galery/image/upload/v1689465066/empresas/WhatsApp_Image_2023-07-13_at_4.25.10_PM_3_qnqlxp.jpg"
            />
          </div>
        </HubspotProvider>
      </div>

      <Helmet title="Corpo Ayapel - ¿Como Puedo Ayudar? " />
    </div>
  );
}

export default HowToHelp;
