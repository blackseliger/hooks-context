
import React from 'react'
import Button from '../Button/Button'

function List({ onSelect, list }) {
    return (
        <div className="table__list">
            {list.map((item) => <Button key={item.id} item={item} onSelect={onSelect}/>)}
        </div>

    )
}

export default List