import React from 'react'
import './Card.css'
import Header from './Header'

export default (props)=>{

    const style ={
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card" style={style}>
            
            <p className="Content "><img className="Icone"src= {props.icon} ></img>{props.nome} </p>
            <p className="Numbers"> {props.numero} </p>
            <p className="Footer"> Seguidores </p>
        </div>
    );
};