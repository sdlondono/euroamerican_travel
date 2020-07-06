import React, { useState, useEffect } from 'react';
let fntSize = 17
function Item({ data }) {
    return (
        <div className="row p-4">
            {
                data.respuesta.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="col-md-6" key={index}>
                            <p style={{ fontSize: fntSize }}>Aerolínea</p>
                        </div>
                        <div className="col-md-6">
                            <p style={{ fontSize: fntSize }}>{item.aerolinea_validadora}</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>Salida</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>{item.FechaSalida}</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>Llegada</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>{item.HoraLLegada}</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>Hora</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>{item.HoraLLegada}</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>Hora</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>{item.HoraSalida}</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>No. de vuelo</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>{item.numero_vuelo}</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>Ruta</p>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontSize: fntSize }}>{item.origen} - {item.destino}</p>
                        </div>
                        <div className="col-md-11">
                            <hr style={{ background: "rgba(0,0,0,.1)", color: "rgba(0,0,0,.1)" }} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Item