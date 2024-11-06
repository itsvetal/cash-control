import React from 'react';
import './Card.css'

interface CardProps {
    children: React.ReactNode;
    className: string;
}

const Card = ({children, className}: CardProps) => {
    const classes = `card ${className}`
    return (
        <div className={classes} >
            {children}
        </div>
    );
}

export default Card;
