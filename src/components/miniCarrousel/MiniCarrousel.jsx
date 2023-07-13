function MiniCarrousel ({indice, cambiarImagen, imagenActual, id, btnTitulo}) {
    return (
        <>
            <div className="miniCarrousel__Container">
                <div className="miniCarrousel__Image__Container">
                    <div className="miniCarrousel__Image" style={{backgroundImage: `url(${imagenActual[indice]})`}}></div>
                    <div className="miniCarrousel__Buttons__Container">
                        <div className={`miniCarrousel__Button ${indice === 0 ? 'active' : ''}`} onClick={() => cambiarImagen(0)}></div>
                        <div className={`miniCarrousel__Button ${indice === 1 ? 'active' : ''}`} onClick={() => cambiarImagen(1)}></div>
                        <div className={`miniCarrousel__Button ${indice === 2 ? 'active' : ''}`} onClick={() => cambiarImagen(2)}></div>
                    </div>
                </div>
                <a href={`#${id}`} className="Program__button">{btnTitulo}</a>
            </div>
        </>
    )
}

export default MiniCarrousel