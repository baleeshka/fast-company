import React from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const BookMark = ({ id, toggleBookmark, ...rest }) => {
	const isBookmarked = rest.status || false

	return (
		<div onClick={() => toggleBookmark(id)}>
			{isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
		</div>
	)
}

export default BookMark
