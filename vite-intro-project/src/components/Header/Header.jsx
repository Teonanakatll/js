import logo from '/logo-name.svg'
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
// import './Header.css'

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
    /* Вложенные стили для классов */
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  .menu {
    display: flex;
    gap: 1rem;
  }

`

export default function Header() {
	const name = "Result"
	const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)

    // после размонтирования компонента выполняется стрелочная функция
    return () => {
      clearInterval(interval)
    }

  }, [])

	

  return (
    <HeaderContainer>
			<img src={logo} alt={name} />
    {/* <h3>Result University</h3> */}

    {/* <span>Время сейчас: {now.toLocaleTimeString()}</span> */}
  </HeaderContainer>
  )
}