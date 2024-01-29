import React from 'react'

const TodaysDate = () => {
	const currentDate = new Date()

	return (
		<div>
			<p className='MsoNormal' style={{ textAlign: 'left' }}>
				<b>
					<span
						style={{
							fontSize: '14pt',
							lineHeight: '107%',
							fontFamily: "'Times New Roman', serif",
						}}>
						{formatDate(currentDate)} года
					</span>
				</b>
			</p>
		</div>
	)
}
const formatDate = date => {
	const day = date.getDate()
	const month = date.getMonth() + 1 // Месяцы в JavaScript начинаются с 0
	const year = date.getFullYear()

	return `${day}.0${month}.${year}`
}

export default TodaysDate
