import {getAverageViews, getTopUserTikToks, getTotalViews, searchUsers} from "@/utils/api";
import Header from "@/components/Header";
import UserBanner from "@/components/UserBanner";
import DataCardsList from "@/components/DataCardList";
import PostList from "@/components/PostList";

const Container = function ({children, title}) {
	return (
		<div className="container mx-auto py-4">
			{title && <h3 className={"mb-4"}>{title}</h3>}
			{children}
		</div>
	);
}


export default async function Details({params}) {
	const uniqueId = params.uniqueId;
	const tiktoks = await getTopUserTikToks(uniqueId);
	const searchResults = await searchUsers(uniqueId);
	const userInfo = searchResults[0];
	const averageMonthlyResults = await getAverageViews(uniqueId);
	const totalMonthlyResults = await getTotalViews(uniqueId);

	return <main className={"details"}>
		<Header />
		<div className="container mx-auto py-4">
			<UserBanner userInfo={userInfo}/>
		</div>
		<div className="container mx-auto py-4">
			<h3 className={ "mb-4" }>User Stats</h3>
			<DataCardsList userInfo={ userInfo }/>
		</div>

		<div className="container mx-auto py-4">
			<h3 className={"mb-4"}>Post List</h3>
			<PostList tiktoks={tiktoks}/>
		</div>
	</main>
}