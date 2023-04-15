import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

function App() {
	const [users, setUsers] = useState(api.users.fetchAll())
	const [bookmarks, setBookmarks] = useState({})

	const toggleBookmark = id => {
		setBookmarks({ ...bookmarks, [id]: !bookmarks[id] })
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
				bookmarks={bookmarks}
				toggleBookmark={toggleBookmark}
			/>
		</div>
	)
}

export default App
