import React, { useEffect, useState } from "react"
import Layout from "./components/layout"
import SearchBar from "./components/SearchBar"
import UserCard from "./components/UserCard"
import merge from "./helpers/merge"
import useFetch from "./hooks/useFetch"
import useStickyState from "./hooks/useStickyState"
import { User } from "./types"

function App() {
	const { data, error, loading } = useFetch(
		"https://gistcdn.githack.com/bltnico/f46b7d186b13832b04c2b978fead2741/raw/c1b8d249a684cf25dc883aac7dcf99d27b0614c4/dummy.json"
	)

	const [users, setUsers] = useState<User[]>([])
	const [usersFavorite, setUsersFavorite] = useStickyState([], "users_favorite")

	const [searchTerm, setSearchTerm] = useState("")

	function handleChange(event: any) {
		event.preventDefault()
		setSearchTerm(event.target.value)
	}

	function handleCardClick(id: string) {
		console.log(id)

		let a: any = new Set(usersFavorite)
		if (a.has(id)) {
			a.delete(id)
		} else {
			a.add(id)
		}
		setUsersFavorite([...a])
		console.log(a)
		console.log(usersFavorite)
	}

	useEffect(() => {
		setUsers(data)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	if (loading)
		return (
			<Layout centered>
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
					<path
						fill="#eee"
						d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
					>
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 25 25"
							to="360 25 25"
							dur="0.5s"
							repeatCount="indefinite"
						/>
					</path>
				</svg>
			</Layout>
		)
	if (error) return <p>Error!</p>

	return (
		users && (
			<Layout>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleChange={handleChange} />
				<div className="grid">
					{users &&
						users
							.filter(({ username }: User) => username.toLowerCase().includes(searchTerm.toLowerCase()))
							.map((user: User) => (
								<UserCard
									onClick={() => handleCardClick(user.id)}
									key={user.id}
									user={user}
									favorite={usersFavorite && usersFavorite.find((e: any) => e === user.id) ? true : false}
								/>
							))}
				</div>
			</Layout>
		)
	)
}

export default App
