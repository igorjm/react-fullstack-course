import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'',
        lastname:''
    }

    handleNameChange = (evt) => {
        this.setState({
            name: evt.target.value
        })
    }

    handleLastnameChange = (evt) => {
        this.setState({
            lastname: evt.target.value
        })
    }

    onHandler = (evt) => {
        evt.preventDefault()


    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onHandler}>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input 
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        ></input>
                    </div>
                    <div className="form_element">
                        <label>Enter Lastname</label>
                        <input 
                            type="text"
                            onChange={this.handleLastnameChange}
                            value={this.state.lastname}
                        ></input>
                    </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;