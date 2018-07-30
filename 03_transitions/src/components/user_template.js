import React from 'react';
import PropTypes from 'prop-types'

const UserTemplate = (props) => {

    return (
        <div>
            User template
        </div>
    )
}

UserTemplate.propTypes = {
    // name:PropTypes.string,
    name:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf(['Igor', 'Other'])
    ]),
    age:PropTypes.number,
    // hobbies:PropTypes.array,
    hobbies:PropTypes.arrayOf(PropTypes.string),
    english:PropTypes.bool,
    message:PropTypes.func,
    car:PropTypes.object
}

export default UserTemplate;

