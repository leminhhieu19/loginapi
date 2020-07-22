import axios from 'axios';

export default {
    addUser: (user) =>
        axios.post("http://localhost:3003/users", user),
    getUserById: () =>
        axios.get("http://localhost:3003/users"),
}