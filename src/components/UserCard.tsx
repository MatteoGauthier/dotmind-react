import React from "react"
import clsx from "../helpers/clsx"
import { UserCardProps } from "../types"

const UserCard: React.FC<UserCardProps> = ({ user, onClick, favorite }) => {
	return (
		<div onClick={onClick} className={clsx("card", favorite && "card-favorite")}>
			<img src={user.picture} alt={`dummy ${user.id}`} />
			<div className="card-body">
				<span>#{user.id}</span>
				<p>{user.username}</p>
			</div>
		</div>
	)
}

export default React.memo(UserCard)
