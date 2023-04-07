import React, { useState } from 'react'
import api from '../api'

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll())
	const handleDelete = userId => {
		const newUsers = users.filter(user => user._id !== userId)
		setUsers(newUsers)
	}
	const renderPhrase = number => {
		if (users.length < 1) {
			return (
				<span className='badge bg-danger m-2'>Никто с тобой не тусанёт</span>
			)
		} else if (users.length < 5 && users.length !== 1) {
			return (
				<span className='badge bg-primary m-2'>
					{users.length} человека тусанут с тобой сегодня
				</span>
			)
		} else if (users.length === 1 || users.length >= 5) {
			return (
				<span className='badge bg-primary m-2'>
					{users.length} человек тусанет с тобой сегодня
				</span>
			)
		}
	}
	if (users.length === 0) {
		return <h2>{renderPhrase()}</h2>
	}

	return (
		<>
			<h2>{renderPhrase()}</h2>
			<table className='table'>
				<thead>
					<tr>
						<th scope='col'>Имя</th>
						<th scope='col'>Качества</th>
						<th scope='col'>Профессия</th>
						<th scope='col'>Встретился, раз</th>
						<th scope='col'>Оценка</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user._id}>
							<td>{user.name}</td>
							<td>
								{user.qualities.map(qualitie => (
									<span
										key={qualitie._id}
										className={`badge bg-${qualitie.color} mx-1`}
									>
										{qualitie.name}
									</span>
								))}
							</td>
							<td>{user.profession.name}</td>
							<td>{user.completedMeetings}</td>
							<td>{user.rate}/5</td>
							<td>
								<button
									onClick={() => handleDelete(user._id)}
									className='btn btn-danger'
								>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Users
