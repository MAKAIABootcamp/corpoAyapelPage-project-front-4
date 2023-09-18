function MiniCarrousel ({indice, cambiarImagen, imagenActual, id, btnTitulo}) {
    return (
        <>
            <div className="miniCarrousel__Container">
                <div className="miniCarrousel__Image__Container">
                    <div className="miniCarrousel__Image" style={{backgroundImage: `url(${imagenActual})`}}></div>
                    <div className="miniCarrousel__Buttons__Container">

                    </div>
                </div>
                <a href={`#${id}`} className="Program__button">{btnTitulo}</a>
            </div>
        </>
    )
}

export default MiniCarrousel