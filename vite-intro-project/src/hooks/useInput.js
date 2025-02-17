import { useState } from "react";

export default function useInput(defaultValue = '') {
	const [value, setValue] = useState()

	// по сути этот хук будет возвращать обьект с ключами: value / onChange
	return {
		value, 
		onChange: (event) => setValue(event.target.value)
	}
}