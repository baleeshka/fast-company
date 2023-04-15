import React from 'react'

const QualitiesList = ({ qualities }) => {
	return (
		<>
			{qualities.map(qualitie => (
				<span key={qualitie._id} className={`badge bg-${qualitie.color} mx-1`}>
					{qualitie.name}
				</span>
			))}
		</>
	)
}

export default QualitiesList
