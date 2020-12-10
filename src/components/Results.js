import React from 'react';
import Result from './Result'

const Results = (props) => {
    const allUsers = props.users.map((user, index) =>(
        <Result user={user} key={index}/>
    ))
    return (
       <>
            {allUsers}
       </>
    );
}

export default Results;
