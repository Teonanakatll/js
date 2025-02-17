import { createPortal } from "react-dom"
import { useRef, useEffect } from "react"
import './Modal.css'

export default function Modal({ children, open }) {
	const dialog = useRef()

	useEffect(() => {
		if (open) {
			dialog.current.showModal()
		} else {
			dialog.current.close()
		}
	}, [open])

	return createPortal(
		// open - нативный атрибут в теге dialog, ref={dialog} - привязывает созданый useRef к нужному элементу
		// React автоматически заполняет dialog.current ссылкой на этот DOM-элемент.
		<dialog ref={dialog}>{children}</dialog>,
		// вторым аргументом передаём место куда это нужно отрендерить
		document.getElementById('modal')
	)
}