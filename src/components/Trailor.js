import React, { Component } from 'react';
import { Carousel } from 'antd';

class Trailor extends Component {
    render() {
        return (
            <Carousel autoplay className="trailor">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1LBFcwy1lhdWe4NMgArY17m3grSfz3DlVxxUDUP6D12Kcaik&usqp=CAU" alt="Smiley face" height="42" width="42" />
                <img src="https://www.w3schools.com/images/lamp.jpg" alt="Smiley face" height="42" width="42" />
                <img src="https://www.w3schools.com/images/lamp.jpg" alt="Smiley face" height="42" width="42" />
            </Carousel>
        );
    }
}

export default Trailor;