import React from 'react'
import QualitiesList from './qualitie'
import BookMark from './bookmark'

const User = ({ user, onDelete, toggleBookmark }) => {
	return (
		<tr key={user._id}>
			<td>{user.name}</td>
			<td>
				<QualitiesList qualities={user.qualities} />
			</td>
			<td>{user.profession.name}</td>
			<td>{user.completedMeetings}</td>
			<td>{user.rate}/5</td>
			<td>
				<BookMark
					bookmark={user.bookmark}
					toggleBookmark={() => toggleBookmark(user._id)}
				/>
			</td>
			<td>
				<button onClick={() => onDelete(user._id)} className='btn btn-danger'>
					delete
				</button>
			</td>
		</tr>
	)
}

export default User
