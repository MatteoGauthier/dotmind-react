export type User = {
	id: string
	username: string
	picture: string
	favorite?: boolean
}
export type Error = {
	message: string
}

export type LayoutProps = {
	children: React.ReactNode
	centered?: boolean
}

export interface UserCardProps {
	user: {
		id: string
		username: string
		picture: string
		favorite?: boolean
	}
	favorite: boolean
	onClick: () => void
}
