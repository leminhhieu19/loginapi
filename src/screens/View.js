import React, { useState, useEffect, memo } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export let loggedIn = false;

const View = memo(function() {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        address: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadVideo();
    }, []);

    const loadVideo = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
<>
            <h1>User Id: {id}</h1>
            <hr />
            <ul>
                <li>User name: {user.username}</li>
                <li>Password: {user.password}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Address: {user.address}</li>
            </ul>
            <Link className="exit" to="/Oive66jrwBs">Exit</Link>
            </>
    );
});

export default View;
