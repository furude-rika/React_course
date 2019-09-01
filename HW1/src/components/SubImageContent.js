import React from 'react'

let SubImageContent = props => {
	return(
		<div className="image-holder">
			<img src={props.item.image} />
			<div className="text-link">
				<a href="">{props.item.text}</a>
			</div>
		</div>
	)
}

export default SubImageContent