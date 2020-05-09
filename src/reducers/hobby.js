const initialState = {
    list: [],
    selectedId: null
}
const hobbyReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'ADD_HOBBY': {
            // cần clone ra 1 object moi
            const newList = [...state.list];
            newList.push(payload);

            return {
                ...state,
                list: newList
            }
        }

        case 'SET_ACTIVE_HOBBY': {
            const newActive = payload.id;
            return {
                ...state,
                selectedId: newActive
            }
        }
        
        default:
            // return ve State cu
            return state;
    }
    
}

export default hobbyReducer;