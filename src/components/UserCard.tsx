import React from "react"
import { User } from "../types"

function UserCard({ user }: { user: User }) {
	return (
		<div className="card">
			<img src={user.picture} alt={`dummy ${user.id}`} />
			<div className="card-body">
				<span>#{user.id}</span>
				<p>{user.username}</p>
			</div>
		</div>
	)
}

export default React.memo(UserCard)
