function BtnLook({ titulo, descripcion, widthTitulo }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: widthTitulo }}>
                <strong><h2 className="tituloLateral">{titulo}</h2></strong>
            </div>
            <div className="btn" id="button-look">
                <p className="look">{descripcion}</p>
            </div>   
        </div>
    );
}

export default BtnLook;