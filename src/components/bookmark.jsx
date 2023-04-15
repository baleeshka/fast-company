import React from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const BookMark = ({ id, bookmarks, toggleBookmark }) => {
	return (
		<div onClick={() => toggleBookmark(id)}>
			{bookmarks[id] ? <BsBookmarkFill /> : <BsBookmark />}
		</div>
	)
}

export default BookMark
