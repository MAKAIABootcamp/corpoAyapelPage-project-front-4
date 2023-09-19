import './ToHelpForm.scss';
import HubspotForm from 'react-hubspot-form'

function ToHelpForm ({ titulo, direccion, descripcion, list , imgURL}) {
    return (
        <div className="form">
            
            <div className={`${direccion === "reverse" ? "form__all__reverse": "form__all"}`}>
                <div className="form__information">
                    <div className="form__title">
                        <h2>{titulo}</h2>
                    </div>
                    <div className="form__imagen__div">
                        <img src={imgURL} alt="" />
                    </div>
                    <div className="form__parraf_div">
                        <p>{descripcion}</p>
                        <ul className='form__list'>
                            {list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="form__inputs__container">
                <HubspotForm
                    portalId='40813403'
                    formId='b9d40750-a7ae-41d9-9b25-6898b4687363'
                    onSubmit={() => console.log('Informacion Enviada')}
                    onReady={(form) => console.log('Formulario listo')}
                    loading={<div>Cargando Formulario...</div>}
                />            
                </div>
                <script  type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
            </div>
        </div>
    )
}

export default ToHelpForm;