import React from 'react'
import './SmallCard.css'

export default (props)=>{

    const style ={

        backgroundColor: props.color || '#F00',

    }

    return (
        <div className="SmallCard">
            <p className="Content"> <img className="Icone"src= {props.icon} ></img> {props.nome} </p>
            <p className="Content Numbers"><strong>85</strong></p>
        </div>
    );
};