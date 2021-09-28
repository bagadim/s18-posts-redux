import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

function getPosts() {
    return api.get('/posts');
}
function getUser(id) {
    return api.get(`/users/${id}`);
}
const placeholderApi = {
    getPosts,
    getUser
};

export default placeholderApi;
