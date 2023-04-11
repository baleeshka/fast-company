import React, { useState } from 'react'
import Users from './components/users'
import api from './api'

function App() {
	const [users, setUsers] = useState(api.users.fetchAll())
	const handleDelete = userId => {}
	const handleToggleBookMark = id => {}
	return (
		<div>
			<Users />
		</div>
	)
}
