import React from 'react'

export const GifItem = ({id, title, images : {original : {url}}}) => {
    return (
        <div 
            key={id}
            className= "card"
        >
            <img
                src={url}
                alt={title}
            />
            <h4>{title}</h4>
        </div>
    )
}
