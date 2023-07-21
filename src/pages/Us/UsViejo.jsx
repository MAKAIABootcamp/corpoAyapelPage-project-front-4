import React from "react";
import "./Us.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

const Us = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const paddedIndex = (index + 1).toString().padStart(2, "0");
      return '<span class="' + className + '">' + paddedIndex + "</span>";
    },
  };
  return (
    <div className="backgroundCulture">
      <main className="mainCulture">
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
              <h2>Historia</h2>
              <p>
                CorpoAyapel, fue fundada el 25 de febrero de 2003 en el
                municipio de Ayapel, por un grupo de 20 personas que querían
                trabajar por mejorar la calidad de vida de los habitantes de
                este municipio.
              </p>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="mainCulture__content">
              {/* <h2>Valores</h2> */}
              <section className="mainCulture__values">
                <p>
                  Inicialmente nos orientamos al desarrollo de proyectos
                  ambientales, al considerar la Ciénaga de Ayapel no solo una
                  riqueza ambiental de gran importancia, sino también, la
                  principal fuente de recursos e ingresos para los habitantes de
                  la región, de allí deriva nuestro nombre “Corporación para el
                  Desarrollo Integral de la Ciénaga de Ayapel”, Corpoayapel.
                  Durante esta primera etapa del proceso, no se cumplieron a
                  cabalidad los objetivos planteados, por falta de compromiso y
                  disciplina de la comunidad seleccionada (pescadores y
                  agricultores).
                </p>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="mainCulture__content">
              {/* <h2>Estrategia Corporativa</h2> */}
              <section className="mainCulture__corp">
                <section>
                  <p>
                    Basados en la experiencia y teniendo en cuenta que la
                    comunidad que se buscaba beneficiar, no tenía resueltas
                    necesidades básicas como la salud y la educación, se dio un
                    nuevo rumbo a la Corporación, haciendo énfasis en 3 líneas
                    de acción: Salud, Educación y Medio Ambiente. Se focalizaron
                    los recursos, en el corregimiento El Cedro con el ánimo de
                    obtener un mayor impacto al cubrir una población de manera
                    integral. Una vez se consolidaron los programas y proyectos
                    que se realizaron en El Cedro, se amplió la cobertura a
                    otras comunidades del municipio, a través de alianzas
                    estratégicas.
                  </p>
                </section>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="mainCulture__content">
              {/* <h2>Misión</h2> */}
              <p>
                Se focalizaron los recursos y las actividades en el
                corregimiento El Cedro, perteneciente a Ayapel, con el ánimo de
                obtener un mayor impacto al cubrir una población de manera
                integral. Una vez consolidados los programas y proyectos que
                realizamos en El Cedro, hemos ampliado la cobertura a otras
                comunidades del municipio.
              </p>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="mainCulture__content">
              {/* <h2>Misión</h2> */}
              <p>
                Desde el año 2015 hemos tenido una rápida expansión a partir de
                una reestructuración organizacional. Empezamos por incorporar el
                concepto de Desarrollo Sostenible y a partir de esto definimos
                nuestras tres líneas de trabajo: ambiental, social y económica.
                También definimos tres condiciones para aumentar el alcance y el
                impacto de nuestras acciones: desarrollar todos los programas y
                proyectos en alianza con entidades expertas, dar una solución
                integral a los problemas de todo el territorio y medir el
                impacto de nuestras acciones.
              </p>
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

export default Us;
