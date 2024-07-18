import React, { Component } from 'react'
import car from '../shared/image/car.jpg'
import assets from '../shared/constant/constantData'
export class MyImangesComp extends Component {
    render() {
        return (
            <div>
                <img src={car} alt='car'></img>
                <img src={assets.sun}></img>
                <video src={assets.video}></video>

            </div>
        )
    }
}

export default MyImangesComp
