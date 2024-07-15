// import 'server-only';
const baseUrl = "http://localhost:8000";

export async function searchUsers(term) {
	const res = await fetch(`${baseUrl}/user/search?username=${term}`)
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
async function main(  ) {

}
