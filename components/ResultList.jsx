import Link from "next/link";
export default function ResultList({searchResults}) {

	return <ul className="list-group">
		{searchResults.map((result) => {
			return <li className="list-group-item d-flex align-items-center justify-content-between mb-4 shadow border">
				<div className="">
					<img width={100} height={100} className={"rounded-circle"}
					     src={result.avatarLarger} alt=""/>
				</div>
				<div className="user-meta">
					<h4>{result.nickname}</h4>
				</div>
				<div className="actions">
					<Link className="btn btn-primary" href={`/details/${result.uniqueId}`}>
						View Data
					</Link>
				</div>
			</li>
		})}
	</ul>

}