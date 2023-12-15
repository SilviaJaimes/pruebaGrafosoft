function DivContainer({ titulo, cantidad, colorTitulo, colorParrafo, fontSize, tamañoParrafo }) {
    return (
        <div className="divContainer">
            <p className="text-content2" style={{ fontSize: fontSize, color: colorTitulo }} >{titulo}</p>
            <p style={{ fontSize: tamañoParrafo, color: colorParrafo }}>{cantidad}</p>
        </div>
    );
}

export default DivContainer;