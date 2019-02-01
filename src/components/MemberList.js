import React from 'react';

import '../stylesheet/MemberList.css'

const MemberList = (props) => {
    console.log(props.memberList);
    const userList = [];
    props.memberList.forEach((value)=>{
        user = props.loadUserSearch(value.user_id);
        userList.push(user);
    })
    const userList = props.memberList.map((value)=>{
        return (
            <li>{value.user_name}</li>
        )
    })

    return(
        <ul>{memberList}</ul>
    )
}

export default MemberList;