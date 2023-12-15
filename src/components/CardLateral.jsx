function CardLateral({ imagen, titulo, widthImg, parrafo, borderImg, colorTitulo, marginTop, colorParrafo, titulo2, fontSize, tamañoParrafo, parrafo2, imgIcon }) {
    return (
        <div className="card card-image-cover" style={{ marginTop: marginTop, borderRadius: '30px', display: 'flex', alignItems: 'center', backgroundColor: '#FFF' }}>
            <img src={imagen} alt="" style={{ width: widthImg, borderRadius: borderImg }} />
            <div className="card-body" style={{ marginLeft: '0.5rem' }}>
                <p className="titulo1" style={{ color: colorTitulo, fontSize: fontSize, marginTop: '-6%' }}>{titulo}</p>
                <p className="text-content2" style={{ color: colorParrafo, fontSize: tamañoParrafo, marginTop: '-1%' }}>{parrafo}</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {imgIcon && <img src={imgIcon} alt="Icono" style={{ width: '40px', height: '40px', marginRight: '1rem', borderRadius: '10px' }} />}
                    <div>
                        <p className="segundo-titulo" style={{ color: colorTitulo, fontSize: fontSize }}>{titulo2}</p>
                        <p className="text-content2" style={{ color: colorParrafo, fontSize: tamañoParrafo, marginTop: '-2%' }}>{parrafo2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardLateral;