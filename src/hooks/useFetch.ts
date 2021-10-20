import { useEffect, useState } from "react"

type UseFetchHook = {
	data: any | null
	error: object | null
	loading: boolean
}
function useFetch(url: string, options?: RequestInit): UseFetchHook {
	const [data, setData] = useState<object | null>(null)
	const [error, setError] = useState<object | null>(null)
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const resp = await fetch(url, options)
				const data = await resp.json()
				
				setData(data)
			} catch (e: any) {
				setData([])
				setError(e)
			}
			setLoading(false)
		}

		fetchData()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return { data, error, loading }
}

export default useFetch
