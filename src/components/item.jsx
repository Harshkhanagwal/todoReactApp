import React from 'react'

const Item = (props) => {


    return (
        <>
            <div className="item-bx">
                <p className="item">{props.text}</p>
                <button className="delete" onClick={() => {props.onSelect(props.id)}}>x</button>
            </div>
        </>
    )
}

export default Item