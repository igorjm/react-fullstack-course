import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmitClick = (evt) => {
        evt.preventDefault()

        const values ={
            name: this.name.value,
            lastname: this.lastname.value
        }
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input 
                            type="text"
                            ref={input => this.name = input}
                        ></input>
                    </div>
                    <div className="form_element">
                        <label>Enter Lastname</label>
                        <input 
                            type="text"
                            ref={input => this.lastname = input}
                        ></input>
                    </div>
                    <button onClick={this.handleSubmitClick}> Sign In</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;