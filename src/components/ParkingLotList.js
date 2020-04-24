import React, { Component } from 'react';
import ParkingLot from './ParkingLot'

class ParkingLotList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            parkingLots: [],
        }
    }

    componentWillMount() {
        const tempList = [{id:'1', name:'Best Park', location:'HK'}, 
                        {id:'2', name:'Haha Park', location:'HK'}, 
                        {id:'3', name:'Koko Park', location:'HK'},
                        {id:'4', name:'abc Park', location:'HK'}, 
                        {id:'5', name:'GG Park', location:'HK'}, 
                        {id:'6', name:'Baby Park', location:'HK'}];
        this.setState({ parkingLots: tempList });
    }
    
    render() {
        return (
            <div className="parkingLotList">
                {this.state.parkingLots.map((parkingLot) => (<ParkingLot id={parkingLot.id} name={parkingLot.name} location={parkingLot.location} removeTodo={ this.removeTodo } />))}
            </div>
        );
    }
}

export default ParkingLotList;