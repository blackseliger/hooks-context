
import React from 'react'
import Button from '../Button/Button'

function List({ onSelect, list }) {
    console.log(list);
    return (
        <div className="table__list">
            {list.map((item) => <Button key={item.id} {...item} onSelect={onSelect}/>)}
        </div>

    )
}

export default List