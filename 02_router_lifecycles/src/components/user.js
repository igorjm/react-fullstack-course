import React from 'react'

import userHoc from '../hoc/userHoc'

const User = () => {
    return (
        <div>
            User
        </div>
    )
}

export default userHoc(User, 'Hello')