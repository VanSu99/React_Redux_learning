// chứa các Action
// action creator : là 1 hàm nhận vào tham số và tạo ra 1 action tương ứng

export const addNewHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby
    }
}

export const setActiveHobby = (hobby) => {
    return {
        type: 'SET_ACTIVE_HOBBY',
        payload: hobby
    }
}