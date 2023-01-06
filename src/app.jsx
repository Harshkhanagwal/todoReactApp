import React, { useState } from 'react'
import Heading from './components/heading';
import Item from './components/item';
const App = () => {

    const [inputList, setInputList] = useState();
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }
    const list = () => {
        setItems((old) => {
            document.getElementById('inp-bx').value = null;
            // state = null;
            return [...old, inputList]
        })
    }

    const deleteItems = (id) =>{
        console.log("working")

        setItems((old) => {
            return old.filter((arrElm, index)=>{
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="main">
                <div className="container">
                    <Heading />

                    <div className="input-area">
                        <input type="text" id='inp-bx' placeholder='Add Item' required onChange={itemEvent} />
                        <button className='add' onClick={list}>+</button>
                    </div>

                    <div className="list-area">
                        <div className="items">
                            {
                                items.map((itemval, index) => {
                                    return (<Item key={index} id={index} text={itemval} onSelect={deleteItems}/>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;