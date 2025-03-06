import s from "./Users.module.css"
import DialogItem from "../Dialogs/DialogItem/DialogItem"
import { useEffect } from "react"
import orig from "../../assets/img/orig.webp"
import axios from 'axios';
import React from "react";

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
		// axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=3&count=5`)
		.then(response => {this.props.setUsersB(response.data.items)})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = []
		for (let i=1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return <div>
				<div></div>
				{/* <span className={s.selectedPage}>{this.props.currentPage}</span> */}
				{pages.map(p => <span className={this.props.currentPage === p && s.selectedPage}
					onClick={() => this.props}>{p}</span>)}

				{this.props.users.map(u => <div key={u.id}>       
					<span>
						<div className={s.avaWrap}>
							<DialogItem id={u.id} name={u.fullName} online={u.online} ava={u.photos.small ? u.photos.small : orig} />
						</div>
						<div>
							{/* {props.users} */}
							
							{u.followed 
								? <button onClick={() => this.props.followB(u.id)}>Unfollow</button> 
								: <button onClick={() => this.props.unFollowB(u.id)}>Follow</button>}
							
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							{/* <div>{u.location.country}</div> */}
							{/* <div>{u.location.city}</div> */}
						</span>
					</span>
				</div>)}
			</div>
	}
}


export default Users