import React, { PureComponent } from 'react'

class Life extends PureComponent {
    // REACT STEPS WHEN RENDER THE COMPONENT
    // 1 get default props

    // 2 set the default state
    state ={
        title: 'Life cycles'
    }

    // 3 before render
    // componentWillMount() {
    //     console.log('3 before render')
    // }

    // componentWillUpdate() {
    //     console.log('BEFORE UPDATE')
    // }

    // componentDidUpdate() {
    //     console.log('AFTER UPDATE')
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextState.title === this.state.title) {
    //         return false
    //     }
    //     return true
    // }

    // componentWillReceiveProps() {
    //     console.log('BEFORE RECEIVE PROPS')
    // }

    // componentWillUnmount() {
    //     console.log('UNMOUNT')
    // }

    // 4 render jxs
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({title: 'Other Title'})
                }> Click to change </div>
            </div>
        )
    }

    // 5 after render
    // componentDidMount() {
    //     document.querySelector('h3').style.color = 'red'
    // }
}

export default Life