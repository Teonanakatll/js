import React from "react"

// export default function IntroSection() {
// 	return (
// 		<section>
// 			<h1 className='centered'>Result University</h1>
// 			<h3 className='centered' style={{color: '#666'}}>
// 				Просто тестовый текст чтобы посмотреть что из себя представляет .jsx
// 			</h3>
// 		</section>
// 	)
// }

export default function IntroSection() {
	return React.createElement('section', null, 
		[React.createElement('h1', {className: 'centered', style: {color: '#666'}, key: 2}, 'Result University'),
			React.createElement('h3', {className: 'centered', style: {color: '#666'}, key: 2}, 'Result University'),
		])
}