import React from 'react';

import '../stylesheet/FighterList.css'

const MemberList = (props) => {
    const fighterList = props.filteredFighterList.map((value) => {
        console.log(works);
        return(
            <li className="fighter-list-item">
                <div>
                    <img src={value.url} alt="image" width='150'></img>
                </div>
                <div className="fighter-list-item-text">
                    <p>{value.name}</p>
                    <p>シリーズ: {value.series}</p>
                    {works}
                </div>
            </li>
        )
    })
    return(
        <ul className="fighter-list">{fighterList}</ul>
    )
}

export default MemberList;