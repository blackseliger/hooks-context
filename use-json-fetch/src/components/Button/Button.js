import React from 'react'

function Button({onSelect, item}) {
    
    return (
        <button onClick={() => onSelect(item.url)}  className="table__button table__button_primary">
          {item.name}
        </button>
    )
}

export default Button