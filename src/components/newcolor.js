import React, { useState } from 'react';

export const NewColor = (props) => {                        //functional component
    const [name, setName] = useState('');
    const [color, setColor] = useState(undefined);

    const onSubmit = (e) => {
        e.preventDefault();                     // if name and color have value, pass in props
        if (name && color) {
            props.addNewColor({name, color});
            setName('');                        //resets name and color to blank string
            setColor('');
        } else {
            console.log('invalid input')            //otherwise will show on console
        }
    };

    return ( 
        <div>
           <h4>Add a New Flower Color</h4>
           <form onSubmit={onSubmit}>
            <input                                      // form with two inputes for flower name and color
                type='text'
                placeholder='name'
                onChange={(e)=> setName(e.target.value)}   //tied to state
                value={name}
                />
            <input
                type='text'
                placeholder='color'
                
                value={color}  
                />
            <button type='submit'>Add Color</button>   
           </form>
        </div>
    )
};

//onChange={handleColorInput}  - error handleColorInput not defined