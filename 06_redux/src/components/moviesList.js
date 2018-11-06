import React from 'react';

const MoviesList = (props) => {

    const renderMovies = (movies) => (
        movies ?
            movies.map((item, i) => (
                <div key={i}>
                    {item.name}
                </div>
            ))
        : null
    )

    return (
        <div>
            {this.renderMovies(props.data.movies)}
        </div>
    );
};

export default MoviesList;