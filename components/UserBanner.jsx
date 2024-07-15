export default function UserBanner({userInfo}) {
	return <div className="card flex-row align-items-center p-4 bg-white shadow">
		<div className="avatar flex-grow-1">
			<img width={100} height={100} className={"rounded-circle"}
			     src={userInfo.avatarLarger} alt=""/>
		</div>
		<div className="user-meta flex-grow-1">
			<h2>{userInfo.uniqueId}</h2>
		</div>
		<div className="user-stats flex-grow-1">
			<div className="row text-center">
				<div className="col-4 ">
					<h6 className={"text-secondary"}>Followers</h6>
					<h4>{userInfo.followingCount}</h4>
				</div>
				<div className="col-4">
					<h6 className={"text-secondary"}>Total Likes</h6>
					<h4>{userInfo.heart}</h4>
				</div>
				<div className="col-4">
					<h6 className={"text-secondary no-wrap"}>Total Videos</h6>
					<h4>{userInfo.videoCount}</h4>
				</div>
			</div>
		</div>

	</div>
}