import placeholderApi from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => (dispatch, getState) => {
    dispatch(fetchPosts()).then(() => {
        const userIds = Array.from(
            new Set(getState().posts.map((post) => post.userId))
        );
        userIds.forEach((id) => dispatch(fetchUser(id)));
    });
};

export const fetchPosts = () => (dispatch) => {
    return placeholderApi.getPosts().then((res) => {
        dispatch({
            type: 'FETCH_POSTS',
            payload: res.data
        });
    });
};

export const fetchUser = (id) => (dispatch) => {
    return placeholderApi.getUser(id).then((res) => {
        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
    });
};
