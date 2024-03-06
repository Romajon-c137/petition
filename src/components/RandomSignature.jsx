import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const RandomSignature = () => {
	const randomIndex = Math.floor(Math.random() * 12) + 1
	const imageUrl = require(`../assets/image/signature${randomIndex}.png`)
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.src = imageUrl
		img.onload = () => setLoaded(true)
	}, [imageUrl])

	return loaded ? (
		<img src={imageUrl} alt='Random Signature' style={{ width: '100%' }} />
	) : (
		<div className='LoaderSignature'>
			<CircularProgress />
		</div>
	)
}

export default RandomSignature
