import React from 'react'

export const GamePreview = (props) => {
   return (
        <div className="game-preview">
            <div className="game-preview-head">
                <img className="img-fluid" src={props.piclink} alt="game"/>
            </div>
            <div className="game-preview-body">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
   )
}

export default GamePreview
