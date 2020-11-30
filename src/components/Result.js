import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Result = (props) => {
  const [userId] = useState(parseInt(localStorage.getItem('id')))
    return (
        <div>
        {userId !== props.user.id ?
        <><span className="r-emoji">👤</span><Link className="result-link" to={`/user/${props.user.id}/profile`}><h3> {props.user.firstName} {props.user.lastName}</h3></Link></> :

        <><span className="r-emoji">👤 </span><Link className="result-link" to={`/profile`}><h3> {props.user.firstName} {props.user.lastName}</h3></Link></>
        }
      </div>
    )
}

export default Result