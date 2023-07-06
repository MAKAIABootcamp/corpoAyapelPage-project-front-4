import './ToHelpForm.scss'

function ToHelpForm ({ titulo, direccion, descripcion, action, id }) {
    return (
        <form className="form" id={id} action={action}>
            <h1>{titulo}</h1>
            <div className={`${direccion === "reverse" ? "form__all__reverse": "form__all"}`}>
                <div className="form__information">
                    <div className="form__imagen__div">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gm-2ahC5LwtmNHO6PTxfUQHaEK%26pid%3DApi&f=1&ipt=9524df108291ea6c3ce8168aaf4d58d6afe0d8b84222ed8aaaf075e30727d795&ipo=images" alt="" />
                    </div>
                    <div className="form__parraf_div">
                        <p>{descripcion}</p>
                    </div>
                </div>
                <div className="form__inputs__container">
                    <input type="text" placeholder="xxxxxxxxxxxxx"/>
                    <input type="text" placeholder="xxxxxxxxxxxxx"/>
                    <input type="text" placeholder="xxxxxxxxxxxxx"/>
                    <input type="text" placeholder="xxxxxxxxxxxxx"/>
                    <button type="submit" className="btn-action">Enviar</button>
                </div>
                    <div className="check__circles">
                        <div className="circle">/</div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="bar"></div>
                    </div>
            </div>
        </form>
    )
}

export default ToHelpForm;