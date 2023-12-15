function DivNotifications({ titulo, parrafo, contenido }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{width: "150px"}}>
                <p className="text-content2" style={{ color: "#000" }}><strong>{titulo} </strong>{parrafo}</p>
            </div>
            <p className="text-content2" style={{color: "#00009", marginRight:"2%"}}>{contenido}</p>
        </div>
    );
}

export default DivNotifications;