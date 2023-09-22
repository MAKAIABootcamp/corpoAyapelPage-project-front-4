import React from "react";
import "./Culture.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
const Culture = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const paddedIndex = (index + 1).toString().padStart(2, '0');
      return '<span className="' + className + '">' + paddedIndex + "</span>";
    },
  };
  return (
    <div className="backgroundCulture">
      <main className="mainCulture">
        {/* <section className='mainCulture__container'>
        <section className='mainCulture__stepper-container'>
          <section className='mainCulture__stepper'>
          <button>01</button>
          <button className='active-tab'>Mision</button>
          <button>02</button>
          <button>03</button>

          </section>
        </section>
        <section className='mainCulture__content'>
          <h2>Misión</h2>
          <p>Promover el desarrollo sostenible del complejo cenagoso de Ayapel y su comunidad.</p>
        </section>
        </section> */}
        <Swiper
          direction={"vertical"}
          pagination={pagination}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="mainCulture__content">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64.833"
                  height="80.946"
                  viewBox="0 0 64.833 80.946"
                >
                  <g
                    id="educacion-ambiental"
                    transform="translate(-488.75 -323.75)"
                    opacity="0.44"
                  >
                    <path
                      id="Trazado_8348"
                      data-name="Trazado 8348"
                      d="M548.313,560.435H535.977a1.284,1.284,0,0,0,0,2.567h12.336a2.452,2.452,0,0,1,2.351,3.154,4.985,4.985,0,0,0-2.351-.587H531.6a5.025,5.025,0,0,0-.832-6l-14.148-14.148a14.161,14.161,0,0,0-8.849-3.665H490.284a1.284,1.284,0,1,0,0,2.567h17.485a11.622,11.622,0,0,1,7.033,2.913l14.148,14.148a2.453,2.453,0,0,1-3.47,3.469l-11.5-11.5a1.284,1.284,0,0,0-1.816,1.815l11.5,11.5a5,5,0,0,0,3.461,1.466c.03,0,.059,0,.089,0h21.1a2.453,2.453,0,0,1,0,4.907l-23.559-.021a5.827,5.827,0,0,1-2.254-.585L498.554,557.65l-.045-.027a8.265,8.265,0,0,0-3.532-.924h-4.694a1.284,1.284,0,1,0,0,2.567h4.694a5.789,5.789,0,0,1,2.253.584l23.946,14.787.045.027a8.274,8.274,0,0,0,3.53.926l23.561.021a8.011,8.011,0,0,0,0-15.176Zm0,0"
                      transform="translate(0 -171.165)"
                      fill="#777779"
                      stroke="#707070"
                      stroke-width="0.5"
                    ></path>
                    <path
                      id="Trazado_8349"
                      data-name="Trazado 8349"
                      d="M654.582,464.491a1.284,1.284,0,1,0,.284,2.552,14.174,14.174,0,0,1,1.568-.088,13.985,13.985,0,0,1,9.017,3.3,1.284,1.284,0,1,0,1.657-1.962,16.556,16.556,0,0,0-9.391-3.851V443.671l6.729-6.142a1.284,1.284,0,1,0-1.731-1.9l-5,4.562V431.94a1.284,1.284,0,1,0-2.567,0v8.255l-5-4.561a1.284,1.284,0,1,0-1.731,1.9l6.729,6.142v20.767c-.19.014-.38.031-.568.053Zm0,0"
                      transform="translate(-124.984 -83.837)"
                      fill="#777779"
                      stroke="#707070"
                      stroke-width="0.5"
                    ></path>
                    <path
                      id="Trazado_8350"
                      data-name="Trazado 8350"
                      d="M601.562,367.08a1.284,1.284,0,0,0,.638-2.487,19.315,19.315,0,1,1,9.632,0,1.284,1.284,0,0,0,.638,2.487,21.883,21.883,0,1,0-10.907,0Zm0,0"
                      transform="translate(-75.565)"
                      fill="#777779"
                      stroke="#707070"
                      stroke-width="0.5"
                    ></path>
                  </g>
                </svg>
              </figure>
              <h2>Misión</h2>
              <p>
                Promover el desarrollo sostenible del complejo cenagoso de
                Ayapel y su comunidad.
              </p>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="mainCulture__content">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64.333"
                  height="46.157"
                  viewBox="0 0 64.333 46.157"
                >
                  <path
                    id="investigacion"
                    d="M112.754,111.6h-4.227v-1.447a1.247,1.247,0,0,0-.9-1.247,35.125,35.125,0,0,0-8.991-1.147c-4.988,0-11.784,1.122-16.81,6.235-4.988-5.163-11.834-6.235-16.81-6.235a35.125,35.125,0,0,0-8.991,1.147,1.247,1.247,0,0,0-.9,1.247v1.434h-4.2a1.247,1.247,0,0,0-1.247,1.247v39.83a1.244,1.244,0,0,0,1.858,1.085c.125-.062,12.595-6.884,30-2.494h.3a1.248,1.248,0,0,0,.3,0c17.458-4.427,29.928,2.382,30,2.494a1.247,1.247,0,0,0,1.871-1.072v-39.83a1.247,1.247,0,0,0-1.247-1.247Zm-60.58,39.081V114.094h2.98v31.275a1.247,1.247,0,0,0,1.434,1.247,54.57,54.57,0,0,1,7.794-.624,32.347,32.347,0,0,1,10.65,1.609,45.84,45.84,0,0,0-22.858,3.08Zm28.419-3.192c-2.594-1.7-7.657-3.978-16.211-3.978a54.867,54.867,0,0,0-6.784.436V111.139a34.394,34.394,0,0,1,7.395-.823c4.664,0,11.1,1.072,15.563,6.11Zm2.494-31.063c4.464-4.988,10.9-6.11,15.563-6.11a34.544,34.544,0,0,1,7.395.823v32.809A54.851,54.851,0,0,0,99.3,143.5c-8.5,0-13.58,2.282-16.211,3.978Zm28.419,34.256A45.853,45.853,0,0,0,88.6,147.6a32.423,32.423,0,0,1,10.7-1.609,54.552,54.552,0,0,1,7.844.611,1.247,1.247,0,0,0,1.434-1.247V114.094h2.98Z"
                    transform="translate(-49.68 -107.759)"
                    fill="#777779"
                    opacity="0.44"
                  ></path>
                </svg>
              </figure>
              <h2>Valores</h2>
              <section className="mainCulture__values">
                <ul>
                  <li>Legalidad</li>
                  <li>Transparencia</li>
                  <li>Respeto</li>
                  <li>Innovación</li>
                </ul>
                <ul>
                  <li>Alianzas</li>
                  <li>Trabajo en equipo</li>
                  <li>Compromiso</li>
                  <li>Responsabilidad</li>
                </ul>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="mainCulture__content">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64.511"
                  height="58.888"
                  viewBox="0 0 64.511 58.888"
                >
                  <g
                    id="voluntarios"
                    transform="translate(-391.74 -286.273)"
                    opacity="0.44"
                  >
                    <path
                      id="Trazado_8342"
                      data-name="Trazado 8342"
                      d="M760.359,333.285a3.941,3.941,0,1,0-3.941-3.941,3.942,3.942,0,0,0,3.941,3.941Zm0-6.075a2.133,2.133,0,1,1-2.133,2.133,2.134,2.134,0,0,1,2.133-2.133Zm0,0"
                      transform="translate(-317.306 -33.845)"
                      fill="#777779"
                      stroke="#707070"
                      stroke-width="0.5"
                    ></path>
                    <g
                      id="Grupo_87"
                      data-name="Grupo 87"
                      transform="translate(391.996 286.531)"
                    >
                      <path
                        id="Trazado_8343"
                        data-name="Trazado 8343"
                        d="M745.853,381.445a.933.933,0,0,0-.728.4,2.8,2.8,0,0,1-.586.6,2.726,2.726,0,0,1-2.037.508,2.754,2.754,0,0,1-1.795-1.111.928.928,0,0,0-.729-.393,3.654,3.654,0,0,0-3.593,3.693V389a.816.816,0,0,0,.861.839h11.339a.8.8,0,0,0,.843-.839v-3.862a3.638,3.638,0,0,0-3.575-3.693Zm1.767,6.586h-9.428v-2.893a1.815,1.815,0,0,1,1.419-1.788,4.542,4.542,0,0,0,6.009.562,4.266,4.266,0,0,0,.6-.562,1.8,1.8,0,0,1,1.4,1.788Zm0,0"
                        transform="translate(-691.858 -369.173)"
                        fill="#777779"
                        stroke="#707070"
                        stroke-width="0.5"
                      ></path>
                      <path
                        id="Trazado_8344"
                        data-name="Trazado 8344"
                        d="M443.116,286.531a12.871,12.871,0,0,0-10.462,20.378L424,309.639l-8.659-2.73a12.874,12.874,0,1,0-12.7,5.183l-2.751,2.751a8.652,8.652,0,0,0,.369,12.2c3.772,3.779,7.838,7.852,11.227,11.241a3.574,3.574,0,0,0,.917,3.4l.044.044a3.523,3.523,0,0,0,2.507,1.025,3.753,3.753,0,0,0,.9-.11l.34.34a3.943,3.943,0,0,0,1.971,1.069,3.508,3.508,0,0,0,2.332.864l.131,0a3.909,3.909,0,0,0,2.63-1.158L424,343l.747.746a3.905,3.905,0,0,0,2.63,1.158l.131,0a3.5,3.5,0,0,0,2.331-.862,3.986,3.986,0,0,0,1.972-1.07l.343-.342a3.586,3.586,0,0,0,3.4-.913l.046-.045a3.585,3.585,0,0,0,.915-3.4c3.415-3.413,7.414-7.419,11.229-11.241a8.653,8.653,0,0,0,.369-12.2l-2.752-2.751a12.878,12.878,0,0,0-2.24-25.561ZM393.8,299.409a11.07,11.07,0,1,1,11.07,11.07,11.07,11.07,0,0,1-11.07-11.07Zm28.166,43.063-.023.021a3.48,3.48,0,0,0,.461-1.076l.308.308Zm12.347-2.073-.046.045a1.924,1.924,0,0,1-2.708-.137l-13.071-13.071-1.278,1.278L428.6,339.9a1.923,1.923,0,0,1,.145,2.7l-.014.013a1.721,1.721,0,0,1-1.295.493,2.1,2.1,0,0,1-1.413-.63l-11.381-11.381-1.278,1.278,6.709,6.709a2.1,2.1,0,0,1,.629,1.414,1.718,1.718,0,0,1-.493,1.295l-.042.042a1.923,1.923,0,0,1-2.7-.133c-3.663-3.645-10.143-10.136-15.929-15.933a6.845,6.845,0,0,1-.37-9.642L405,312.286a12.839,12.839,0,0,0,9.08-3.879l6.913,2.18-3.83,1.208a.9.9,0,0,0-.628.946l.1,1.043a4.8,4.8,0,0,0,1.645,3.441,4.881,4.881,0,0,0,3.718,1.158l.542-.053,12.507,12.525a1.924,1.924,0,0,1,.135,2.707l-.007.008a1.719,1.719,0,0,1-1.288.486,2.1,2.1,0,0,1-1.355-.573l-4.082-4.081c-3.111-3.11-5.8-5.8-6.057-6.056l-1.283,1.274c.261.263,2.949,2.951,6.062,6.062l4.024,4.022h0c.026.026.052.052.078.077,1.086,1.085,2.091,2.09,2.911,2.911a1.924,1.924,0,0,1,.137,2.708Zm12.141-14.636c-3.667,3.674-7.5,7.516-10.825,10.838-.056-.064-.114-.127-.174-.187l-.65-.65a3.466,3.466,0,0,0,1.645-.923l.011-.01a3.732,3.732,0,0,0-.145-5.253l-11.048-11.064.729-.73a.9.9,0,0,0-.728-1.538l-3.458.339a3.086,3.086,0,0,1-2.356-.723,3.017,3.017,0,0,1-1.026-2.177.447.447,0,0,0,0-.046l-.031-.339,15.514-4.892a12.84,12.84,0,0,0,9.079,3.879l3.835,3.835a6.845,6.845,0,0,1-.369,9.642Zm-3.343-15.284a11.07,11.07,0,1,1,11.07-11.07,11.07,11.07,0,0,1-11.07,11.07Zm0,0"
                        transform="translate(-391.996 -286.531)"
                        fill="#777779"
                        stroke="#707070"
                        stroke-width="0.5"
                      ></path>
                    </g>
                    <path
                      id="Trazado_8345"
                      data-name="Trazado 8345"
                      d="M464.579,333.285a3.941,3.941,0,1,0-3.942-3.941,3.941,3.941,0,0,0,3.942,3.941Zm0-6.075a2.133,2.133,0,1,1-2.134,2.133,2.134,2.134,0,0,1,2.134-2.133Zm0,0"
                      transform="translate(-59.767 -33.845)"
                      fill="#777779"
                      stroke="#707070"
                      stroke-width="0.5"
                    ></path>
                    <path
                      id="Trazado_8346"
                      data-name="Trazado 8346"
                      d="M453.757,389v-3.862a3.65,3.65,0,0,0-3.589-3.693.932.932,0,0,0-.728.4,2.82,2.82,0,0,1-.586.6,2.748,2.748,0,0,1-3.832-.607.926.926,0,0,0-.729-.389,3.642,3.642,0,0,0-3.579,3.693V389a.8.8,0,0,0,.847.839H452.9a.812.812,0,0,0,.857-.839Zm-1.808-.969h-9.428v-2.893a1.809,1.809,0,0,1,1.412-1.788,4.537,4.537,0,0,0,6.005.562,4.28,4.28,0,0,0,.6-.562,1.806,1.806,0,0,1,1.41,1.788Zm0,0"
                      transform="translate(-42.419 -82.642)"
                      fill="#777779"
                      stroke="#707070"
                      stroke-width="0.5"
                    ></path>
                  </g>
                </svg>
              </figure>
              <h2>Estrategia Corporativa</h2>
              <section className="mainCulture__corp">
                <section>
                  <h3>Propósito</h3>
                  <p>
                    Desarrollamos el potencial de los territorios rurales para
                    promover el desarrollo sostenible y garantizar condiciones
                    dignas, que permita la permanencia de sus habitantes.
                  </p>
                </section>
                <section>
                  <h3>Objetivos</h3>
                  <p>
                    Consolidar el complejo cenagoso de Ayapel como un territorio
                    sostenible Compartir la experiencia (Visibilidad).
                    Estabilidad financiera Líneas estratégicas Diálogo
                    interinstitucional para la operación de programas y
                    proyectos en Ayapel Gestión integral de territorios rurales
                    sostenibles.
                  </p>
                </section>
              </section>
            </section>
          </SwiperSlide>
        </Swiper>
      </main>
      <section className="bird">
      <figure>
          <img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688423761/fondo-1-1_fvxyjv.png" alt="" />
        </figure>
      </section>
    </div>
  );
};

export default Culture;
