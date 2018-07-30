import React, { Component } from 'react';
import UserTemplate from './user_template'

class User extends Component {

    state = {
        name:"Igor",
        age: 22,
        hobbies: [''],
        english: true,
        message(){console.log('hey')},
        car: {brand: "Ford", model: "Focus"}
    }

    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        )
    }
}

export default User;