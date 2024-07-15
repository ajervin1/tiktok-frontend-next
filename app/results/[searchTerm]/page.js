
import {searchUsers} from "@/utils/api";
import Header from "@/components/Header";
import ResultList from "@/components/ResultList";

export default async  function Results({params}) {
	const searchTerm = params.searchTerm;
	const searchResults = await searchUsers(searchTerm)
	console.log(searchResults)
	return <main>
		<Header />
		<div className="w-50 mx-auto pt-5">
			<ResultList searchResults={searchResults} />
		</div>

	</main>
}