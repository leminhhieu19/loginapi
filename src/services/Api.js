import axios from 'axios';

export default {
    addUser: (user) =>
        axios.post("https://milky-auth.herokuapp.com/login", user),
    getUserById: () =>
        axios.get("https://milky-auth.herokuapp.com/login"),
}
