import React from 'react'

let MainContent = props => {
	return(
		<div>
			<h2>{props.item.mainTitle}</h2>
			<time>{props.item.time}</time>
			<h3>{props.item.subTitle}</h3>
			<p>{props.item.text}</p>
		</div>
	)
}

export default MainContent