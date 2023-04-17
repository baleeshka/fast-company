import React from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const BookMark = ({ id, toggleBookmark, bookmark }) => {
	return (
		<div onClick={() => toggleBookmark(id)}>
			{bookmark ? <BsBookmarkFill /> : <BsBookmark />}
		</div>
	)
}

export default BookMark
