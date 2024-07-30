import { getUsers } from "@/utils/api";

const SITE_URL = "https://www.tiktokanalytics.tech"

export default async function sitemap() {
	const users = await getUsers();
	let routes = [
		{
			url: SITE_URL,
			lastModified: new Date(),
			priority: 1,
		},
	]
	const dynamicRoutes = users.map(user => {
		return {
			url: `${ SITE_URL }/details/${ user.uniqueId }`,
			lastModified: user.createdAt,
			priority: 1,
		}
	});
	routes = [ ...routes, ...dynamicRoutes ];
	return routes;
}
