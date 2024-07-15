export default function PostList({tiktoks}) {
	return <ul className="post-list list-group">
		{tiktoks.map((tiktok) => {
			return <li className="post-item list-group-item d-flex align-items-center shadow bg-white p-4 mb-2">
				<div className="avatar flex-grow-1">
					<img width={150} height={150} className={"rounded"}
					     src={tiktok.video.dynamicCover} alt=""/>
				</div>
				<div className="user-meta flex-grow-1">
					<p className={'title'}>{tiktok.desc}</p>
				</div>
				<div className="post-stats flex-grow-1">
					<div className="row text-center">
						<div className="col-3"><h6 className="text-secondary">Collect Count</h6><h4>{tiktok.stats.collectCount}</h4>
						</div>
						<div className="col-3"><h6 className="text-secondary">Comments</h6><h4>{tiktok.stats.commentCount}</h4>
						</div>
						<div className="col-3"><h6 className="text-secondary">Likes</h6><h4>{tiktok.stats.diggCount}</h4></div>
						<div className="col-3"><h6 className="text-secondary">Plays</h6><h4>{tiktok.stats.playCount}</h4></div>
					</div>
				</div>
			</li>

		})}

	</ul>
}