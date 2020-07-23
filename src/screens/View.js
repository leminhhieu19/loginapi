import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export let loggedIn = false;

const View = () => {
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
            <h1 className="">User Id: {id}</h1>
            <hr />
            <ul className="">
                <li className="">User name: {user.username}</li>
                <li className="">Password: {user.password}</li>
                <li className="">Email: {user.email}</li>
                <li className="">Phone: {user.phone}</li>
                <li className="">Address: {user.address}</li>
            </ul>
            <Link className="" to="/activeVideo">Exit</Link>
            </>
    );
};

export default View;
