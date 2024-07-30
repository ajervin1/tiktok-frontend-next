import 'server-only';
const baseUrl = "https://tiktok-backend-production-92f7.up.railway.app";
export async function getUsers() {
	const res = await fetch(`${baseUrl}/users`)
	return res.json()
}
export async function searchUsers(term) {
	const res = await fetch(`${baseUrl}/user/search?username=${term}`)
	console.log(res)
	return res.json()
}
export async function getTopUserTikToks(username) {
	const res = await fetch(`${baseUrl}/user/tiktoks-top?username=${username}`)

	return res.json()
}

export async function getAverageViews(username) {
	const res = await fetch(`${baseUrl}/user/tiktoks-average-views?username=${username}`)

	return res.json()
}
export async function getTotalViews(username) {
	const res = await fetch(`${baseUrl}/user/tiktoks-total-views?username=${username}`)
	return res.json()
}

