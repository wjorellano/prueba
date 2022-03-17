import React from 'react'

export const Card = (props) => {
     return(
            <div className='card'>
                <p >{props.title}</p>
            </div>
        
     )
};


export const CardToday = (props) => {
     return(
            <div>
                <p>{props.title}</p>
            </div>
     )
};