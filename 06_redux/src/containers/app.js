import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { moviesList, directorsList } from '../actions'
import MoviesList from '../components/moviesList'

class App extends Component {

    componentWillMount() {
        this.props.moviesList();
        this.props.directorsList();
    }



    render() {
        return (
            <div>
                <MoviesList {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        moviesList,
        directorsList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);