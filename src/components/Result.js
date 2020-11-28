import React from 'react'
import {Link} from 'react-router-dom'

const Result = (props) => {
    return (
        <div>
        <Link to={`/user/${props.user.id}/profile`}><h3> {props.user.firstName} {props.user.lastName}</h3></Link> 
      </div>
    )
}

export default Result