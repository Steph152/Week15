import React from 'react';
import { Flower } from './Flower';
import { flowerApi } from '../rest/FlowerApi'; 

export class FlowerList extends React.Component {
    state = {
        flowers: []         //set flowers to empty array to start
    };

    componentDidMount(){
        this.fetchFlowers();        
    };

    fetchFlowers = async () => {                        //async method to get flowers from API, using get method in FlowerApi.js
        const flower = await flowerApi.get();           
        this.setState({ flower });
    };

    updateFlowers = async (updateFlower) => {           //update state with new flowers 
        await flowerApi.put(updateFlower);
        this.fetchFlowers();
    };

    render(){
       // console.log(this.state.flowers);
        return (
            <div className="flower-list">  
            <h1>TEST AGAIN</h1>                     
                {this.state.flowers.map((flower, id) => (           // map each flower, then create an instance of Flower
                    <Flower
                        flower={flower}
                        key={flower.id}
                        updateFlower={this.updateFlowers}
                        />
                ))}
            </div>
        )
    }


}