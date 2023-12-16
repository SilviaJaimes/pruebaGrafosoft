function Card({ letterSpace, imagen, color, titulo, parrafo, infoBoton, colorTitulo, colorParrafo, colorBtn, parrafo3, fontBtn, marginBottom, widthBtn, fontSize, tamañoParrafo, parrafo2, marginTop }) {
    return (
        <div className="card card-image-cover flex flex-row max-w-full" style={{ backgroundColor: color, marginTop: marginTop, marginBottom: marginBottom }}>
            <div className="card-body w-1/2 p-4">
                <p className="titulo-card" style={{ letterSpacing: letterSpace,color: colorTitulo, fontSize: fontSize}}>{titulo}</p>
                <p className="text-content2 mb-4" style={{ color: colorParrafo, fontSize: tamañoParrafo}}>{parrafo}</p>
                <p className="text-content2 mb-4" style={{ color: colorParrafo, fontSize: tamañoParrafo, marginTop: '-6%'}}>{parrafo2}</p>
                <p className="text-content2 mb-4" style={{ color: colorParrafo, fontSize: tamañoParrafo, marginTop: '-6%'}}>{parrafo3}</p>
                <div className="card-footer">
                    {infoBoton && <button className="btn-secondary btn" style={{ backgroundColor: colorBtn, fontSize: fontBtn, width: widthBtn, marginLeft: '3%' }}>
                        {infoBoton}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="5" stroke="currentColor" className="w-4 h-4" id="ion-t" style={{marginLeft: '8%'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>}
                </div>
            </div>
            {imagen && <img src={imagen} alt="" className="w-1/2 object-cover"/>}
        </div>
    );
}

export default Card;