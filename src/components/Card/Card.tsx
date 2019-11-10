import React from 'react';
import DefaultImage from '../../assets/react_image.svg';
import './Card.css';

export default function Card() {
    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={DefaultImage} alt="Card"/>
            </div>
            <div className="title">
                <span>Title</span>
            </div>
            <div className="description">
                <span>Description</span>
            </div>
        </div>
    );
}