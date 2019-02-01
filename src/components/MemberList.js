import React from 'react';

import '../stylesheet/MemberList.css'

const MemberList = (props) => {
    console.log(props.memberList);
    const memberList = props.memberList.map((value)=>{
        return (
            <li>{value.user_name}</li>
        )
    })

    return(
        <ul>{memberList}</ul>
    )
}

export default MemberList;