import React, { memo } from 'react'
const RandomSignature = () => {
	const randomIndex = Math.floor(Math.random() * 15) + 1
	const imageUrl = require(`../assets/image/signature${randomIndex}.jpg`)

	return <img src={imageUrl} alt='Random Signature' style={{ width: '100%' }} />
}

export default memo(RandomSignature)
