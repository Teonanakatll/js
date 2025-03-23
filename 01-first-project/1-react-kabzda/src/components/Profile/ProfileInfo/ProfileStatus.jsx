import s from "./ProfileInfo.module.css";
import { useState, useCallback } from "react";
import { updateStatus } from "../../../redux/profile-reducer";
import { useSelector, useDispatch } from "react-redux";

// const status = profileAPI.getStatus(2)

const ProfileStatus = () => {
	const dispatch = useDispatch()
	const status = useSelector((store) => store.profilePage.status)
	const [ statusLocal, setStatusLocal ] = useState(status)
	const [ editMode, setEditMode ] = useState(false)

	const handleUpdateStatus = useCallback((status) => {
		dispatch(updateStatus(status))
	}, [dispatch])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
		handleUpdateStatus(statusLocal)
	}

	const onStatusChange = (e) => {
		setStatusLocal(e.currentTarget.value)
	}

	return (
		<div>
			{!editMode &&
				<div>
					<span onDoubleClick={ activateEditMode } >{status ? status : "Пока нет статуса..."}  {status}</span>
				</div>
			}
			{console.log('render')}
			{editMode &&
				<div>
					<input onChange={ onStatusChange } onBlur={ deActivateEditMode } autoFocus={true} value={statusLocal}></input>
				</div>
			}
		</div>
	)
}
export default ProfileStatus