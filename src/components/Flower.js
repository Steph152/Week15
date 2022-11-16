import React from 'react';
import { NewColor } from './newcolor';     //would be like new room in the vidoes
import { flowerApi } from '../rest/FlowerApi';

export const Flower = (props) => {
    const { flower, updateFlower } = props;

    const deleteColor = (flowerId) => {          //deleting color will be updating a flower
        const updatedFlower = {
            ...flower,                          //spread flower
            color: flower.color.filter((x) => x.id !== flowerId)   //all the flowers minus the one we want to delete     
        };
        updateFlower(updatedFlower);
    }

    const addNewColor = (color) =>  updateFlower({ ...flower, color: [...flower.color, color]});

   
    const color = () => (
        <ul>
            {flower.color.map((color, index)=> (
                <li key={index}>
                    <label>{`${color.name}`}</label>
                    <button onClick={(e) => deleteColor(color.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (                                                // return entire flower component together
        <div>
            <h1>Test</h1>
            <h1>{flower.flower}</h1>
            {
                color({ color, flowerId: flower.id, deleteColor})   //color is a function, taking in props
            }
            <NewColor addNewColor={addNewColor}/>
        </div>
    );
};