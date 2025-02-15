import logo from '/logo-name.svg'
import { useState } from 'react'

export default function Header() {
	const name = "Result"
	const [now, setNow] = useState(new Date())

	setInterval(() => setNow(new Date()), 1000)

  return (
    <header>
			<img src={logo} alt={name} />
    {/* <h3>Result University</h3> */}

    {/* <span>Время сейчас: {now.toLocaleTimeString()}</span> */}
  </header>
  )
}