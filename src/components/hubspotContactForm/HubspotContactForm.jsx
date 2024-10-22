import React, { useEffect, useState } from "react";
import "./hubspotContactForm.scss";

const HubspotContactForm = ({ id, idForm }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Validar que los IDs no estén vacíos
    if (!id || !idForm) {
      setError("Los IDs del formulario son requeridos");
      setIsLoading(false);
      return;
    }

    let scriptLoaded = false;

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;

    script.addEventListener("load", () => {
      scriptLoaded = true;
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            portalId: id,
            formId: idForm,
            target: "#hubspotForm",
            onFormReady: () => {
              setIsLoading(false)
            },
            onFormSubmit: () => {
              console.log("Formulario enviado");
            },
            onFormError: (errors) => {
              setError(errors[0].message);
              setIsLoading(false);
            },
          });
        } catch (error) {
          console.error(error);
          setError("Error al crear el formulario");
          setIsLoading(false);
        }
      }
    });

    script.addEventListener("error", () => {
      setError("Error al cargar el script de HubSpot");
      setIsLoading(false);
    });

    // Verificar si el script ya existe
    const existingScript = document.querySelector(
      `script[src="${script.src}"]`
    );
    if (!existingScript) {
      document.body.appendChild(script);
    } else if (window.hbspt) {
      // Si el script ya está cargado, crear el formulario inmediatamente
      script.dispatchEvent(new Event("load"));
    }

    return () => {
      // Limpieza
      if (scriptLoaded && !existingScript) {
        document.body.removeChild(script);
      }
    };
  }, [id, idForm]);



  //   useEffect(() => {
  //     // Validar que los IDs no estén vacíos
  //     if (!id || !idForm) {
  //       setError("Los IDs del formulario son requeridos");
  //       setIsLoading(false);
  //       return;
  //     }
  //     let scriptLoaded = false;
  //     const script = document.createElement("script");
  //     script.src = "https://js.hsforms.net/forms/v2.js";
  //     script.async = true;

  //     script.addEventListener("load", () => {
  //       scriptLoaded = true;
  //       // @TS-ignore
  //       if (window.hbspt) {
  //         // @TS-ignore
  //         try {
  //           window.hbspt.forms.create({
  //             portalId: id,
  //             formId: idForm,
  //             target: "#hubspotForm",
  //             onFormReady: () => {
  //               setIsLoading(false);
  //             },
  //             onFormSubmit: () => {
  //               console.log("Formulario enviado");
  //             },
  //             onFormError: (errors) => {
  //               setError(errors[0].message);
  //               setIsLoading(false);
  //             },
  //           });
  //         } catch (error) {
  //           console.error(error);
  //           setError("Error al crear el formulario");
  //           setIsLoading(false);
  //         }
  //       }
  //     });
  //     script.addEventListener("error", () => {
  //       setError("Error al cargar el script de HubSpot");
  //       setIsLoading(false);
  //     });
  //     // Verificar si el script ya existe
  //     const existingScript = document.querySelector(
  //       `script[src="${script.src}"]`
  //     );
  //     if (!existingScript) {
  //       document.body.appendChild(script);
  //     } else if (window.hbspt) {
  //       // Si el script ya está cargado, crear el formulario inmediatamente
  //       script.dispatchEvent(new Event("load"));
  //     }
  //     return () => {
  //       // Limpieza
  //       if (scriptLoaded && !existingScript) {
  //         document.body.removeChild(script);
  //       }
  //     };
  //   }, [id, idForm]);

  if (error) {
    return (
      <div className="hubspot-error">
        <p>Error al cargar el formulario: {error}</p>
        <p>Por favor, intente más tarde o contáctenos directamente.</p>
      </div>
    );
  }

  if (isLoading) {
    return <div className="hubspot-loading">Cargando formulario...</div>;
  }

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotContactForm;
