import React, { useState } from 'react'
import api from '../api'
let spanStyle = ''
const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll())
	const renderPhrase = () => {
		if (users.length < 1) {
			spanStyle = 'badge bg-danger m-2'
			return 'Никто с тобой не тусанёт'
		} else if (users.length < 5 && users.length !== 1) {
			spanStyle = 'badge bg-primary m-2'
			return `${users.length} человека тусанут с тобой сегодня`
		} else if (users.length === 1 || users.length >= 5) {
			spanStyle = 'badge bg-primary m-2'
			return `${users.length} человек тусанет с тобой сегодня`
		}
		console.log(spanStyle)
	}
	const handleDelete = userId => {
		const newUsers = users.filter(user => user._id !== userId)
		setUsers(newUsers)
	}

	return (
		<>
			<h2>
				<span className={spanStyle}>{renderPhrase()}</span>
			</h2>
			{users.length > 0 && (
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
			)}
		</>
	)
}

export default Users
