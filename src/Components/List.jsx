import React from 'react'

export default function List() {

    const items = ['Bmw', 'Toyota', 'Camry', 'Venza'];

    return (
        <ul>
            {items.map(function (item, i) {
                console.log(i)
                return <li key={i}>{item}</li>;
            })}
        </ul>
    )
}