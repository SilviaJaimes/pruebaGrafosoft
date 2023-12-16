import React from "react";

function Characters({ characters = [], colorTitulo, colorParrafo, fontSize, tamañoParrafo, titulo1, parrafo1, parrafo2, parrafo3, fontCant }) {
    return (
        <div>
            {characters.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', borderBottom: index === 2 ? 'none' : '1px solid #D1D1D1', paddingBottom: '15px', paddingTop: '15px' }}>
                    <img src={item.image} alt="Icono" style={{ width: '40px', height: '40px', marginRight: '1rem', borderRadius: '10px' }} />
                    <div>
                        <p className="segundo-titulo" style={{ color: colorTitulo, fontSize: fontSize, width: '195px' }}>{item.name}</p>
                        <p className="text-content2" style={{ color: colorParrafo, fontSize: tamañoParrafo, marginTop: '-2%' }}>{item.species}</p>
                    </div>
                    <div style={{ marginLeft: '55px' }}>
                        <p className="text-content2" style={{ color: colorParrafo, fontSize: tamañoParrafo, width: '70px' }}>{parrafo2}</p>
                    </div>
                    <div style={{ marginLeft: '5px' }}>
                        <strong>
                            <p className="text-content2" style={{ color: colorTitulo, fontSize: fontCant, width: '50px' }}>{parrafo3}</p>
                        </strong>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Characters;