import './details.css'
import {getAverageViews, getTopUserTikToks, getTotalViews, searchUsers} from "@/utils/api";
import Header from "@/components/Header";
import UserBanner from "@/components/UserBanner";
import DataCardsList from "@/components/DataCardList";
import PostList from "@/components/PostList";
import DateStringChart from "@/components/DateStringChart";
import BarChart from "@/components/BarChart";
function formatDateToMonthYearCorrected(dateString) {
	const date = new Date(dateString);
	const year = date.getUTCFullYear().toString().slice(-2)
	const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC'  });
	const formattedDate = `${month} ${year}`;
	return formattedDate
}
/* Dynamic MetaData */
export async function generateMetadata({ params }) {
	return {
		title: `${params.uniqueId} (@${params.uniqueId}) - TikTok Data Analytics | TikTok Analytics`,
		description: `Analyze ${params.uniqueId} (@${params.uniqueId}) TikTok profile for growth, engagement, followers, likes, and average video performance. Get comprehensive insights now!`
	}
}
/* Details Page */
export default async function Details({params}) {
	const uniqueId = params.uniqueId;
	const tiktoks = await getTopUserTikToks(uniqueId);
	const searchResults = await searchUsers(uniqueId);
	const userInfo = searchResults[0];
	const averagePlays = await getAverageViews(uniqueId);
	const totalPlays = await getTotalViews(uniqueId);
	const lineSeriesData = averagePlays.map(row => {
		return {
			x: row.date.split("T")[0].slice(0, 7),
			y: row.averagePlayCount,
		}
	})
	const barSeriesData = totalPlays.map(row => {
		return {

			x: formatDateToMonthYearCorrected(row.date),
			y: row.totalPlayCount,
		}
	})
	return <main className={ "details" }>
		<Header/>
		<div className="container mx-auto py-4">
			<UserBanner userInfo={ userInfo }/>
		</div>
		<div className="container mx-auto py-4">
			<h3 className={ "mb-4" }>User Stats</h3>
			<DataCardsList userInfo={ userInfo }/>
		</div>
		<div className="container mx-auto py-4">
			<h3 className={ "mb-4" }>User Analytics</h3>
			<div className="row">
				<DateStringChart seriesData={lineSeriesData} seriesName={'Average Play Count'} title={"Average Play Count"} />
				<BarChart seriesData={barSeriesData} seriesName={"Total Play Count"} title={"Total Play Count"} />
			</div>
		</div>
		<div className="container mx-auto py-4">
			<h3 className={"mb-4"}>Post List</h3>
		<PostList tiktoks={tiktoks}/>
		</div>
	</main>
}