import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState();

    const toggleBookmark = (userId) => {
        const updatedUsers = users.map((user) => {
            if (user._id === userId) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        });

        setUsers(updatedUsers);
    };

    const handleDelete = (userId) => {
        const newUsers = users.filter((user) => user._id !== userId);
        setUsers(newUsers);
    };
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    return (
        <div className="container">
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    toggleBookmark={toggleBookmark}
                />
            )}
        </div>
    );
}

export default App;
