import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

function App() {
	const [users, setUsers] = useState(api.users.fetchAll())

	const toggleBookmark = userId => {
		const updatedUsers = users.map(user => {
			if (user._id === userId) {
				return { ...user, bookmark: !user.bookmark }
			}
			return user
		})

		setUsers(updatedUsers)
	}

	const handleDelete = userId => {
		const newUsers = users.filter(user => user._id !== userId)
		setUsers(newUsers)
	}

	return (
		<div className='container'>
			<SearchStatus count={users.length} />
			<Users
				users={users}
				onDelete={handleDelete}
				toggleBookmark={toggleBookmark}
			/>
		</div>
	)
}

export default App
