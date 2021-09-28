export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER': {
            if (state.find((user) => user.id === action.payload.id))
                return state;
            return [...state, action.payload];
        }
        default:
            return state;
    }
};
