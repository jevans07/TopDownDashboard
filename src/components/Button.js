import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom'

export function Button() {
    return(
        <Link to ='Learn-more'>
            <button className='btn'>Learn More</button>
        </Link>
    );
}