import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

export default function CardList () {
    const items = [1, 2, 3, 4, 5, 6, 7, 8]
    const getItems = items.map(item => {
        return (
        <div className="item" key={item}>
            <div className="card-wrapper">
                <Card></Card>
            </div>
        </div>)
    })

    return (
        <div className="list-wrapper">
            {getItems}
        </div>
    );
}