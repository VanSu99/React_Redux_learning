import React from 'react';
import './HobbyList.css';

function HobbyList(props) {

    const { hobbyList, activeId, onHobbyClick } = props;

    const handleHobbyActive = (hobby) => {
        console.log('clicked: ', hobby)
        if(onHobbyClick && typeof onHobbyClick === 'function') {
            onHobbyClick(hobby);
        }
    }

    return (
        <div>
            <ul>
                {
                    hobbyList.map((item) => {
                        return (
                            <li 
                                key={item.id}
                                className={activeId === item.id ? 'active' : ''}
                                onClick={() => {handleHobbyActive(item)}}
                            >
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default HobbyList;