import React from 'react'

export const Card = (props) => {
     return(
         <div className="col">
            <div className='card card-first'>
                <div className='card-body'>
                    <p className='card-title'>{props.day} {props.date}</p>
                    <div className="img-tiempo">
                        <img src={props.img} className='' alt="icon" width="70%" height="70%"/>
                    </div>
                    <p className='temperature'>{props.grado}</p>
                </div>
            </div>
        </div>
        
     )
};


export const CardToday = (props) => {
     return(
            <div className="card">
                <div className='card-body'>
                </div>
            </div>
     )
};