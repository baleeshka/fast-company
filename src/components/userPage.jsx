import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import api from "../api";
const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <h3>
                    Качества:
                    {user.qualities.map((qualitie) => (
                        <span
                            key={qualitie._id}
                            className={`badge bg-${qualitie.color} mx-1`}
                        >
                            {qualitie.name}
                        </span>
                    ))}
                </h3>
                <h3>Количество встреч: {user.completedMeetings}</h3>
                <h3>Рейтинг: {user.rate}/5</h3>
                <a href="/users" className="btn btn-secondary">
                    Все пользователи
                </a>
            </>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

export default UserPage;
