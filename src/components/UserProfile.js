import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button } from 'antd'

export default class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            fullName: '',
            carLicense: '',
            location: ''

        }

        this.onChange = this.onChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }


    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onUpdate(event) {
  
        event.preventDefault()
        //alert(this.state.userID + '   ' + this.state.name + '   ' + this.state.carLicense)

        const updatedItems = {
            id: this.state.userID,
            fullName: this.state.name,
            carLicense: this.state.carLicense,
            location: this.state.location

        }

        axios.put("http://CHIURE-w10-3:8082/rest/parkguide/members/000002221", updatedItems)
            .then(response => {
                if (response.data != null) {
                    this.setState(this.state)
                    alert("Saved successfully")
                    
                }

               
            })
           
            // this.context.history.push('/RegisterPage')

    }

    componentDidMount() {
        axios.get("http://CHIURE-w10-3:8082/rest/parkguide/members/000002221")
            // .then(response=>console.log(response.data))
            .then(response => {
                this.setState({
                    userId: response.data.id,
                    fullName: response.data.fullName,
                    carLicense: response.data.carLicense,
                    location: response.data.location

                })
                console.log(response.data.id + '   ' + response.data.fullName)
            })
    }


    render() {
        const { carLicense, location } = this.state

        return (

            <div>
                <h1>This is a user profile</h1>
                {this.props.value}
                <form ><Input required autoComplete="off" name="carLicense" value={carLicense}
                    onChange={this.onChange}
                    type="text" placeholder="Enter car license"></Input>

                    <Input required autoComplete="off" name="location" value={location}
                        onChange={this.onChange}
                        type="text" placeholder="Enter preferred location"></Input>
                    <Button size="sm" type="submit" onClick={this.onUpdate}>Submit</Button>

                </form>
            </div>
        )
    }
}
