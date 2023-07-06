function MiniCarrousel ({indice, cambiarImagen, imagenActual, id}) {
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
                <a href={`#${id}`} className="Program__button">PROGRAMA VOLUNTARIOS</a>
            </div>
        </>
    )
}

export default MiniCarrousel