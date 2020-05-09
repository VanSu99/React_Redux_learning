import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HobbyList from '../components/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

const randomNumber = () => {
    return 100 + Math.floor(Math.random() * 900);
}

function HomePage(props) {
    // state.hobby.list -> state truy cap vao Reducer hobby truy cap tiep vao state list
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.selectedId);
    
    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        // thêm những gì vào
        let newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }
        // dispatch action để add vào redux store
        // trong Action Creator này truyền vào là payload 
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        console.log('Cha tiep nhan', hobby);
        const action = setActiveHobby(hobby);
        
        //dispatch(actionCreator(payload))
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h2>React Redux Practice</h2>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />

            <button onClick={handleAddHobbyClick}>Add Hobby</button>
        </div>
    );
}

export default HomePage;