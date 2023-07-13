import './ToHelpForm.scss';
import HubspotForm from 'react-hubspot-form'

function ToHelpForm ({ titulo, direccion, descripcion, list , imgURL}) {
    return (
        <div className="form">
            <h1>{titulo}</h1>
            <div className={`${direccion === "reverse" ? "form__all__reverse": "form__all"}`}>
                <div className="form__information">
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
                    portalId='40152509'
                    formId='91832b93-e78b-45ec-ac18-0fde40cb39f5'
                    onSubmit={() => console.log('Informacion Enviada')}
                    onReady={(form) => console.log('Formulario listo')}
                    loading={<div>Cargando Formulario...</div>}
                />            
                </div>
            </div>
        </div>
    )
}

export default ToHelpForm;