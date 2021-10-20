import React from "react"
import UserCard from "./components/UserCard"
import useFetch from "./hooks/useFetch"
import { User } from "./types"

function App() {
	const {
		data: users,
		error,
		loading,
	} = useFetch(
		"https://gistcdn.githack.com/bltnico/f46b7d186b13832b04c2b978fead2741/raw/c1b8d249a684cf25dc883aac7dcf99d27b0614c4/dummy.json"
	)

	if (loading) return "Loading"

	if (error) return "error"

	return users && <div>{users && users.map((user: User) => <UserCard key={user.id} user={user} />)}</div>
}

export default App
